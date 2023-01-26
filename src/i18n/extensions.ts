import { Target } from '@http';
import type { TranslationFunctions } from './i18n-types';

export function i18nTarget(LL: TranslationFunctions, target: Target): string {
	switch (target) {
		case Target.all:
			return LL.all();
		case Target.newest:
			return LL.newest();
		case Target.oldest:
			return LL.oldest();
	}
}
