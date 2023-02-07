import { FetchClient } from './client';

const baseUrl = new URL('http://localhost:8082');

export const leaksEndpoint = 'leaks';

export class SantosClient extends FetchClient {
	constructor() {
		super(baseUrl);
	}
}
