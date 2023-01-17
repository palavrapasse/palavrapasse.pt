import { Target, type QueryLeaks, SantosClient, SantosQueryImpl } from '@http';
import { writable } from 'svelte/store';

export const QueryLeaksStore = createQueryStore();

function createQueryStore() {
	const { subscribe, set } = writable(<QueryLeaks>{});

	const santosQuery = new SantosQueryImpl(new SantosClient());

	return {
		subscribe,
		all: () => santosQuery.leaks(Target.all).then(set),
		affected: (affected: string[]) => santosQuery.leaks(Target.all, affected).then(set),
		reset: () => set(<QueryLeaks>{})
	};
}
