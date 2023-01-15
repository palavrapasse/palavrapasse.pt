export interface Client {
	get(endpoint: string): Promise<Response>;
}

export class FetchClient implements Client {
	constructor(private readonly baseUrl: URL) {}

	get(endpoint: string): Promise<Response> {
		return this.request(endpoint, Method.get);
	}

	private request(endpoint: string, method: Method): Promise<Response> {
		const url = `${this.baseUrl}${endpoint}`;

		const request = <RequestInit>{
			method: method
		};

		return fetch(url, request);
	}
}

enum Method {
	get = 'GET'
}
