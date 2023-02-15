<script lang="ts">
	import { isCombolistContext, type QueryLeaks } from '@http';
	import { i18nLeakShareDate, LL } from '@i18n';

	export let id: string;
	export let leaks: QueryLeaks;
	export let includeEmail: boolean;

	const includesCombolistContext = leaks.find((l) => isCombolistContext(l.context)) !== undefined;
</script>

<div class="flex w-full overflow-x-auto mt-5">
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
					<td>
						{#if isCombolistContext(leak.context)}
							{leak.context} *
						{:else}
							{leak.context}
						{/if}
					</td>
					<td>
						{i18nLeakShareDate($LL, new Date(leak.shareDateMSEpoch))}
					</td>
					{#if includeEmail}
						<td>{leak.email}</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

{#if includesCombolistContext}
	<p class="text-start w-full">
		{$LL.combolistExplanation()}
	</p>
{/if}
