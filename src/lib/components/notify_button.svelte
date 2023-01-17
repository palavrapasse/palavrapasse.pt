<script lang="ts">
	export let id: string;
</script>

<button class="btn" id="notify-button-{id}" on:click>
	<div class="flex flex-row items-center">
		<div class="flex-column">
			<div>Receber</div>
			<div>notificações</div>
		</div>
		<div class="flex-row grow w-12">🔔</div>
	</div>
</button>
