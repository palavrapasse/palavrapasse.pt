<script lang="ts">
	export let id: string;
	export let label: string;
	export let values: string[];
	export let onValueChange: (value: string) => void;

	let selectedValue: string;

	const dropdownId = `dropdown-${id}`;

	$: {
		if (selectedValue) {
			console.log('ayyyy ' + selectedValue);
			onValueChange(selectedValue);
		}
	}
</script>

<div id={dropdownId} class="dropdown">
	<label class="btn" tabindex="-1" for={dropdownId}>{label}</label>
	<div class="dropdown-menu dropdown-menu-bottom-right gap-1">
		{#each values as value}
			<div
				on:click={() => (selectedValue = value)}
				on:keyup={() => null}
				class="dropdown-item text-sm {value === selectedValue ? 'dropdown-active' : ''}"
			>
				{value}
			</div>
		{/each}
	</div>
</div>
