<script lang="ts">
	import { Target } from '@http';
	import { i18nTarget, LL } from '@i18n';
	import type { DropdownValueTuple } from './dropdown';
	import Dropdown from './dropdown.svelte';

	export let onValueChange: (value: Target) => void;

	const values: DropdownValueTuple<Target>[] = Object.values(Target).map((t) => [
		t,
		i18nTarget($LL, t)
	]);
</script>

<Dropdown id="query-leaks-target" label={$LL.filter()} {values} {onValueChange} />
