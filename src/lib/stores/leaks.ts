import SantosClient from '$lib/http/client/santos';
import SantosQueryImpl from '$lib/http/query/santos';
import { Target, type QueryLeaks } from '@http';
import { writable } from 'svelte/store';

export const QueryLeaksStore = createQueryStore();

function createQueryStore() {
	const { subscribe, set } = writable(<QueryLeaks>{});

	const santosQuery = new SantosQueryImpl(new SantosClient());

	return {
		subscribe,
		all: () => santosQuery.leaks(Target.all).then(set),
		reset: () => set(<QueryLeaks>{})
	};
}
