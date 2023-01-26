<script lang="ts">
	import { Target } from '@http';
	import { i18nTarget, LL } from '@i18n';
	import Dropdown from './dropdown.svelte';

	export let onValueChange: (value: Target) => void;

	const values: [Target, string][] = Object.values(Target).map((t) => [t, i18nTarget($LL, t)]);
</script>

<Dropdown id="query-leaks-target" label="Filtro" {values} {onValueChange} />
