<script lang="ts">
	import type { QueryLeaks } from '@http';

	export let id: string;
	export let leaks: QueryLeaks;
</script>

<div class="flex w-full overflow-x-auto">
	<table id="leaks-query-table-{id}" class="table">
		<thead>
			<tr>
				<th>Contexto</th>
				<th>Data do Leak</th>
			</tr>
		</thead>
		<tbody>
			{#each leaks as leak}
				<tr>
					<th>{leak.context}</th>
					<td>{new Date(leak.shareDateMSEpoch).toLocaleDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
