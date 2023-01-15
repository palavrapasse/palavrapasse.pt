import { FetchClient } from './client';

const baseUrl = new URL('http://localhost:8080');

export const leaksEndpoint = 'leaks';

export default class SantosClient extends FetchClient {
	constructor() {
		super(baseUrl);
	}
}
