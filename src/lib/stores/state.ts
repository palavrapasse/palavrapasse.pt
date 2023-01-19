import type { Store } from './store';

export type TypedState<T> = {
	state: State;
} & TypedStateValue<T> &
	StateExtensions;

type TypedStateValue<T> = {
	value: T;
};

type StateExtensions = {
	loading: boolean;
	success: boolean;
};

export enum State {
	initial,
	loading,
	success,
	failure
}

export function from<T>(value: T, state: State): TypedState<T> {
	return {
		value: value,
		state: state,
		loading: state == State.loading,
		success: state == State.success
	};
}
