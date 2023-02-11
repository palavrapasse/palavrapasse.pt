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
	failure: boolean;
	throttled: boolean;
};

export enum State {
	initial,
	loading,
	success,
	failure,
	throttled
}

export function from<T>(value: T, state: State): TypedState<T> {
	return {
		value: value,
		state: state,
		loading: state == State.loading,
		success: state == State.success,
		failure: state == State.failure,
		throttled: state == State.throttled
	};
}
