<script lang="ts">
	import type { DropdownValueTuple } from './dropdown';

	type T = $$Generic;

	export let id: string;
	export let label: string;
	export let values: DropdownValueTuple<T>[];
	export let onValueChange: (value: T) => void;

	let selectedValue: T;
	const dropdownId = `dropdown-${id}`;

	$: {
		if (selectedValue) {
			onValueChange(selectedValue);
		}
	}
</script>

<div id={dropdownId} class="dropdown">
	<label class="btn" tabindex="-1" for={dropdownId}>{label}</label>
	<div class="dropdown-menu dropdown-menu-bottom-right gap-1">
		{#each values as [value, valueLabel]}
			<div
				on:click={() => (selectedValue = value)}
				on:keyup={() => null}
				class="dropdown-item text-sm {value === selectedValue ? 'dropdown-active' : ''}"
			>
				{valueLabel}
			</div>
		{/each}
	</div>
</div>
