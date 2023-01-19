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
		all: () => onAllEvent(store, santosQuery),
		affected: (affected: string[]) => onAffectedEvent(store, santosQuery, affected),
		reset: () => onResetEvent(store, santosQuery)
	};
}

function onAllEvent(store: Store<QueryLeaks>, query: Query): void {
	return onLoading(store, () => query.leaks(Target.all).then((ql) => setSuccess(store, ql)));
}

function onAffectedEvent(store: Store<QueryLeaks>, query: Query, affected: string[]): void {
	return onLoading(store, () =>
		query.leaks(Target.all, affected).then((ql) => setSuccess(store, ql))
	);
}

function onResetEvent(store: Store<QueryLeaks>, query: Query): void {
	return setInitial(store, <QueryLeaks>{});
}
