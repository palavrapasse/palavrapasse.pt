<script lang="ts">
	import '../app.css';
	import { LL } from '@i18n';
	import {
		NotifyButton,
		SearchInput,
		QueryLeaksTable,
		HelloIllustration,
		ThumbsUpIllustration,
		Badge
	} from '@components';
	import { QueryLeaksStore, State } from '@stores';

	let value = '';
	let affected: string[] = [];
	let isEditing = true;

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

		QueryLeaksStore.affected(affectedEmails);
	}

	function removeFromAffectedQuery(email: string) {
		affected = [...affected.filter((v) => v !== email)];
	}
</script>

<body class="md:container md:mx-auto flex flex-col items-center">
	<h1 class="text-4xl h-12">{$LL.homepageTitle()}</h1>
	<h2 class="text-xl h-16">{$LL.homepageDescription()}</h2>

	<!-- preventDefault prevents input being included in webpage url -->
	<form class="h-14 w-full text-center" on:submit|preventDefault={searchAffected}>
		<SearchInput id="affected-email" bind:value />
	</form>

	<span>(utiliza a virgula se quiseres procurar por mais que um e-mail)</span>

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
</body>

<div class="fixed bottom-12 right-16">
	<NotifyButton id="subscribe-leak-notifications" />
</div>
