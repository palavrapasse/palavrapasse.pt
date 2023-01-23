<script lang="ts">
	export let id: string;
	export let value: string;
	export let onRemoveCallback: () => void;
</script>

<span id="badge-{id}" class="badge badge-primary"
	>{value}
	<button
		type="button"
		on:click={onRemoveCallback}
		class="inline-flex items-center p-0.5 ml-2 bg-transparent rounded-sm"
	>
		<svg
			aria-hidden="true"
			class="w-3.5 h-3.5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
	</button>
</span>
