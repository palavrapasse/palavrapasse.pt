import { FetchClient } from './client';

const baseUrl = new URL('https://api.palavrapasse.pt');

export const leaksEndpoint = 'leaks';

export class SantosClient extends FetchClient {
	constructor() {
		super(baseUrl);
	}
}
