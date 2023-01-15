export type Leak = {
	context: string;
	shareDateMSEpoch: number;
};

export type QueryLeaks = Array<Leak>;
