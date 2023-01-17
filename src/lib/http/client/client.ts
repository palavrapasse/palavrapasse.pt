export interface Client {
	get(endpoint: string, query?: QueryParameters): Promise<Response>;
}

export class FetchClient implements Client {
	constructor(private readonly baseUrl: URL) {}

	get(endpoint: string, query?: QueryParameters): Promise<Response> {
		const request = <Request>{
			url: this.resolveUrl(this.baseUrl, endpoint, query),
			method: Method.get,
			query: query
		};
		return this.request(request);
	}

	private request(request: Request): Promise<Response> {
		const url = request.url;

		const fetchRequest = <RequestInit>{
			method: request.method
		};

		return fetch(url, fetchRequest);
	}

	private resolveUrl(baseUrl: URL, endpoint: string, query?: QueryParameters): string {
		let url = `${baseUrl}${endpoint}`.replaceAll(/\/{2,}/g, '/');

		if (query) {
			url = `${url}?${new URLSearchParams(query)}`;
		}

		return url;
	}
}

export type QueryParameters = Record<string, string>;

type Request = {
	url: string;
	method: Method;
};

enum Method {
	get = 'GET'
}
