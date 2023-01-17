<script lang="ts">
	export let id: string;
	export let value: string;
</script>

<input
	class="input-ghost-primary input"
	type="search"
	name="search-input"
	id="search-input-{id}"
	bind:value
/>
