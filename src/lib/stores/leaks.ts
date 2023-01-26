import { Target, type QueryLeaks, SantosClient, SantosQueryImpl, type Query } from '@http';
import { writable } from 'svelte/store';
import type { TypedState } from './state';
import { onLoading, setInitial, setSuccess, type Store } from './store';

export const QueryLeaksStore = createQueryStore();

function createQueryStore() {
	const store = writable(<TypedState<QueryLeaks>>{});
	const subscribe = store.subscribe;

	const santosQuery = new SantosQueryImpl(new SantosClient());

	return {
		subscribe,
		affected: (affected: string[], target: Target) => onAffectedEvent(store, santosQuery, affected, target),
		reset: () => onResetEvent(store)
	};
}

function onAffectedEvent(store: Store<QueryLeaks>, query: Query, affected: string[], target: Target): void {
	return onLoading(store, () =>
		query.leaks(target, affected).then((ql) => setSuccess(store, ql))
	);
}

function onResetEvent(store: Store<QueryLeaks>): void {
	return setInitial(store, <QueryLeaks>{});
}
