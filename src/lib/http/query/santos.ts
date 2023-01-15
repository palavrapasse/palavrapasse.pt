import type SantosClient from '../client/santos';
import { leaksEndpoint } from '../client/santos';
import type { QueryLeaks, Target } from '../model';
import type { Query } from './interface';

export default class SantosQueryImpl implements Query {
	constructor(private readonly client: SantosClient) {}

	leaks(target: Target): Promise<QueryLeaks> {
		return this.client.get(leaksEndpoint).then((response) => response.json());
	}
}
