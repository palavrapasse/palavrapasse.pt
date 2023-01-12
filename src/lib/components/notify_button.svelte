<script lang="ts">
	export let id: string;
</script>

<button id="notify-button-{id}" on:click>
	<div style="display: flex; flex-direction: row;">
		<div>Receber notificações</div>
		<div>🔔</div>
	</div>
</button>
