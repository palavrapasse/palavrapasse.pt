import type { QueryLeaks, Target } from '../model';

export interface Query {
	leaks(target: Target, affected?: string[]): Promise<QueryLeaks>;
}
