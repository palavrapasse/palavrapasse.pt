import { Target, type QueryLeaks, SantosClient, SantosQueryImpl, type Query } from '@http';
import { State } from './state';
import {
	createStore,
	onFailure,
	onLoading,
	onThrottled,
	setInitial,
	setSuccess,
	type Store
} from './store';

export const QueryLeaksStore = createQueryStore();

function createQueryStore() {
	const store = createStore<QueryLeaks>();
	const subscribe = store.subscribe;

	const santosQuery = new SantosQueryImpl(new SantosClient());

	return {
		subscribe,
		affected: (affected: string[], target: Target) =>
			onAffectedEvent(store, santosQuery, affected, target),
		reset: () => onResetEvent(store)
	};
}

function onAffectedEvent(
	store: Store<QueryLeaks>,
	query: Query,
	affected: string[],
	target: Target
): void {
	if (store.state != State.loading) {
		return onLoading(store, () =>
			query.leaks(target, affected).then((ql) => processClientResult(store, ql))
		);
	}
}

function processClientResult(store: Store<QueryLeaks>, res: QueryLeaks | number): void {
	if (typeof res === 'number') {
		if (res === 429) {
			onThrottled(store);
		} else {
			onFailure(store);
		}
	} else {
		setSuccess(store, res);
	}
}

function onResetEvent(store: Store<QueryLeaks>): void {
	return setInitial(store, <QueryLeaks>{});
}
