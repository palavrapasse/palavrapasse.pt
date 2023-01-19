import { writable, type Writable } from 'svelte/store';
import { from, State, type TypedState } from './state';

export type Store<T> = {} & Writable<TypedState<T>>;

export function createStore<T>(): Store<T> {
	return writable(<TypedState<T>>{});
}

export function onLoading<T>(store: Store<T>, action: () => void): void {
	return updateState(store, State.loading, action);
}

export function updateState<T>(store: Store<T>, state: State, action: () => void): void {
	store.update((s) => from(s.value, state));

	return action();
}

export function setInitial<T>(store: Store<T>, value: T): void {
	return setState(store, value, State.initial);
}

export function setSuccess<T>(store: Store<T>, value: T): void {
	return setState(store, value, State.success);
}

export function setState<T>(store: Store<T>, value: T, state: State): void {
	const typedState = from(value, state);

	return store.set(typedState);
}
