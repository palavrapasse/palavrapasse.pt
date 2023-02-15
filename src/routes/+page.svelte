<script lang="ts">
	import '../app.css';
	import { LL } from '@i18n';
	import {
		SearchInput,
		QueryLeaksTable,
		HelloIllustration,
		ThumbsUpIllustration,
		Badge,
		QueryLeaksTargetDropdown,
		SearchingIllustration,
		FireIllustration,
		NopeIllustration,
		ReadingIllustration
	} from '@components';
	import { QueryLeaksStore } from '@stores';
	import type { Target } from '@http';

	let value = '';
	let affected: string[] = [];
	let isEditing = true;
	let target: Target;
	let inputElement: HTMLInputElement;

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

		inputElement.blur();

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
		<h1 class="text-2xl sm:text-4xl text-center">{$LL.homepageTitle()}</h1>
		<h2 class="text-lg sm:text-xl h-16 text-center mt-1">{$LL.homepageDescription()}</h2>

		<!-- preventDefault prevents input being included in webpage url -->
		<form
			class="h-14 w-full text-center flex flex-row"
			on:submit|preventDefault={searchAffected}
			action="."
		>
			<QueryLeaksTargetDropdown onValueChange={setLeaksTargetFilter} />
			<SearchInput id="affected-email" bind:value bind:inputElement />
		</form>

		<span class="text-center">{$LL.leakSearchHint()}</span>

		<section class="flex-row">
			{#if affected.length > 0}
				{#each affected as email}
					<Badge id={email} value={email} onRemoveCallback={() => removeFromAffectedQuery(email)} />
				{/each}
			{/if}
		</section>

		{#if $QueryLeaksStore.success && !isEditing}
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
		{:else if $QueryLeaksStore.loading}
			<SearchingIllustration />
			<p>{$LL.loadingState()}</p>
		{:else if $QueryLeaksStore.failure}
			<FireIllustration />
			<p>{$LL.failureState()}</p>
		{:else if $QueryLeaksStore.throttled}
			<NopeIllustration />
			<p>{$LL.throttledState()}</p>
		{:else if !isEditing && affected.length === 0}
			<HelloIllustration />
		{:else}
			<ReadingIllustration />
			<p class="text-center">{$LL.editingState()}</p>
		{/if}
	</div>
</body>
