import type { QueryLeaks, Target } from '../model';

export interface Query {
	leaks(target: Target): Promise<QueryLeaks>;
}
