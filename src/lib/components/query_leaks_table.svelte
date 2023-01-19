<script lang="ts">
	import type { QueryLeaks } from '@http';
	import { LL } from '@i18n';

	export let id: string;
	export let leaks: QueryLeaks;
</script>

<div class="flex w-full overflow-x-auto">
	<table id="leaks-query-table-{id}" class="table">
		<thead>
			<tr>
				<th>{$LL.leakContext()}</th>
				<th>{$LL.leakShareDate()}</th>
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
