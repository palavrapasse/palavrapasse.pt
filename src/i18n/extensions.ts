import { isDefaultShareDate, Target } from '@http';
import { dateFormatter } from './formatters';
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

export function i18nLeakShareDate(LL: TranslationFunctions, date: Date): string {
	if (isDefaultShareDate(date)) {
		return LL.unknown();
	} else {
		return dateFormatter(date);
	}
}
