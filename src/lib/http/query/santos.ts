import { type QueryParameters, SantosClient, leaksEndpoint } from '../client';
import type { QueryLeaks, Target } from '../model';
import type { Query } from './interface';

export class SantosQueryImpl implements Query {
	constructor(private readonly client: SantosClient) {}

	leaks(target: Target, affected?: string[]): Promise<QueryLeaks> {
		const query = <QueryParameters>{
			target: target,
			affected: affected
		};

		return this.client.get(leaksEndpoint, query).then((response) => response.json());
	}
}
