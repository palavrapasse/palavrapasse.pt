<script lang="ts">
	import { NotifyButton, SearchInput } from '@components';

	let value: string;
</script>

<center>
	<h1>Alguém sabe as minhas credenciais?</h1>
	<h2>Utiliza o nosso motor de busca e descobre se foste afetado!</h2>

	<SearchInput id="1234" bind:value />

	{#if value}
		<h3>
			Não encontro registos para: {value}
		</h3>
	{/if}
</center>

<div style="text-align: right; vertical-align: bottom;">
	<NotifyButton id="1234" />
</div>
