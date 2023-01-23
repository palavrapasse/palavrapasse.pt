<script lang="ts">
	import type { QueryLeaks } from '@http';
	import { LL } from '@i18n';

	export let id: string;
	export let leaks: QueryLeaks;
	export let includeEmail: boolean;
</script>

<div class="flex w-full overflow-x-auto">
	<table id="leaks-query-table-{id}" class="table">
		<thead>
			<tr>
				<th>{$LL.leakContext()}</th>
				<th>{$LL.leakShareDate()}</th>
				{#if includeEmail}
					<th>{$LL.leakEmail()}</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each leaks as leak}
				<tr>
					<td>{leak.context}</td>
					<td>{new Date(leak.shareDateMSEpoch).toLocaleDateString()}</td>
					{#if includeEmail}
						<td>{leak.email}</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
