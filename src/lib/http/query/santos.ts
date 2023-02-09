import { type QueryParameters, SantosClient, leaksEndpoint } from '../client';
import type { QueryLeaks, Target } from '../model';
import type { Query } from './interface';

export class SantosQueryImpl implements Query {
	constructor(private readonly client: SantosClient) { }

	async leaks(target: Target, affected?: string[]): Promise<QueryLeaks | number> {
		const query = <QueryParameters>{
			target: target,
			affected: affected
		};

		try {
			const response = await this.client.get(leaksEndpoint, query);

			return response.status == 200 ? response.json() : Promise.resolve(response.status);
		} catch (err) {
			console.error(err);
			return 500;
		}
	}
}
