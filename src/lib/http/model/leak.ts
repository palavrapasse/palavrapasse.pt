export type Leak = {
	email: string;
	context: string;
	shareDateMSEpoch: number;
};

export type QueryLeaks = Array<Leak>;
