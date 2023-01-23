<script lang="ts">
	export let id: string;
	export let value: string;
</script>

<input
	class="input input-ghost-primary input-block"
	type="search"
	name="search-input"
	id="search-input-{id}"
	bind:value
/>
