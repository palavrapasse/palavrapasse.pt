<script lang="ts">
	export let id: string;
	export let value: string;
	export let inputElement: HTMLInputElement;
</script>

<input
	class="input input-ghost-primary input-block"
	type="search"
	name="search-input"
	id="search-input-{id}"
	bind:value
	bind:this={inputElement}
/>
