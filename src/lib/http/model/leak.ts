const combolistLeakContext = 'COMBOLIST';
const defaultLeakBadActor = 'UNKNOWN';
const defaultLeakContext = [combolistLeakContext, 'UNKNOWN'];
const defaultLeakPlatform = 'UNKNOWN';
const defaultLeakShareDate = new Date(0);

export type Leak = {
	email: string;
	context: string;
	shareDateMSEpoch: number;
};

export type QueryLeaks = Array<Leak>;

export function isDefaultBadActor(actor: string): boolean {
	return actor === defaultLeakBadActor;
}

export function isDefaultContext(context: string): boolean {
	return defaultLeakContext.includes(context);
}

export function isDefaultPlatform(platform: string): boolean {
	return platform === defaultLeakPlatform;
}

export function isDefaultShareDate(shareDate: Date): boolean {
	return shareDate.getTime() === defaultLeakShareDate.getTime();
}

export function isCombolistContext(context: string): boolean {
	return context.toUpperCase().includes(combolistLeakContext);
}
