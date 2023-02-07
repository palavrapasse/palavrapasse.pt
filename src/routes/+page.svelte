<script lang="ts">
	import '../app.css';
	import { LL } from '@i18n';
	import {
		SearchInput,
		QueryLeaksTable,
		HelloIllustration,
		ThumbsUpIllustration,
		Badge,
		QueryLeaksTargetDropdown
	} from '@components';
	import { QueryLeaksStore, State } from '@stores';
	import type { Target } from '@http';

	let value = '';
	let affected: string[] = [];
	let isEditing = true;
	let target: Target;

	$: {
		const trimmed = value.replaceAll(/\\s+|,*/g, '');

		if (trimmed.length > 1 && value.endsWith(',')) {
			affected.push(trimmed);
			value = '';
		} else if (value.length === 0) {
			isEditing = false;
		} else {
			isEditing = true;
		}
	}

	function searchAffected(): void {
		const affectedEmails = [...affected];

		const trimValue = value.trim();

		if (trimValue.length > 0) {
			affectedEmails.push(trimValue);
		}

		isEditing = false;

		QueryLeaksStore.affected(affectedEmails, target);
	}

	function removeFromAffectedQuery(email: string): void {
		affected = [...affected.filter((v) => v !== email)];
	}

	function setLeaksTargetFilter(tt: Target): void {
		target = tt;
	}
</script>

<body>
	<div class="md:container md:mx-auto flex flex-col items-center">
		<h1 class="text-2xl sm:text-4xl h-12 text-center">{$LL.homepageTitle()}</h1>
		<h2 class="text-lg sm:text-xl h-16 text-center">{$LL.homepageDescription()}</h2>

		<!-- preventDefault prevents input being included in webpage url -->
		<form class="h-14 w-full text-center flex flex-row" on:submit|preventDefault={searchAffected}>
			<QueryLeaksTargetDropdown onValueChange={setLeaksTargetFilter} />
			<SearchInput id="affected-email" bind:value />
		</form>

		<span class="text-center">(utiliza a virgula se quiseres procurar por mais que um e-mail)</span>

		<section class="flex-row">
			{#if affected.length > 0}
				{#each affected as email}
					<Badge id={email} value={email} onRemoveCallback={() => removeFromAffectedQuery(email)} />
				{/each}
			{/if}
		</section>

		{#if $QueryLeaksStore.state == State.success && !isEditing}
			{#if $QueryLeaksStore.value.length > 0}
				<QueryLeaksTable
					id={value}
					leaks={$QueryLeaksStore.value}
					includeEmail={affected.length > 0 || value.trim().length > 0}
				/>
			{:else}
				{$LL.leaksQueryNotFoundResponse()}
				<ThumbsUpIllustration />
			{/if}
		{:else if !isEditing && affected.length === 0}
			<HelloIllustration />
		{/if}
	</div>
</body>
