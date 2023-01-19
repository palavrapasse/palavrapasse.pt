<script lang="ts">
	import '../app.css';
	import { LL } from '@i18n';
	import {
		NotifyButton,
		SearchInput,
		QueryLeaksTable,
		HelloIllustration,
		ThumbsUpIllustration
	} from '@components';
	import { QueryLeaksStore, State } from '@stores';

	let value: string;
	let affected: string[];

	$: {
		if (value) {
			affected = [];
		}
	}

	function searchAffected(): void {
		const trimValue = value.trim();

		if (trimValue.length > 0) {
			affected = [value];

			QueryLeaksStore.affected(affected);
		}
	}
</script>

<body class="md:container md:mx-auto flex flex-col items-center">
	<h1 class="text-4xl h-12">{$LL.homepageTitle()}</h1>
	<h2 class="text-xl h-16">{$LL.homepageDescription()}</h2>

	<!-- preventDefault prevents input being included in webpage url -->
	<form class="h-14" on:submit|preventDefault={searchAffected}>
		<SearchInput id="affected-email" bind:value />
	</form>

	{#if $QueryLeaksStore.state == State.success}
		{#if $QueryLeaksStore.value.length > 0}
			<QueryLeaksTable id={value} leaks={$QueryLeaksStore.value} />
		{:else}
			{$LL.leaksQueryNotFoundResponse({ email: value })}
			<ThumbsUpIllustration />
		{/if}
	{:else if $QueryLeaksStore.state == State.loading}
		<div class="text-center">
			<svg
				class="animate-spin text-center h-3/4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</div>
	{:else}
		<HelloIllustration />
	{/if}
</body>

<div class="fixed bottom-12 right-16">
	<NotifyButton id="subscribe-leak-notifications" />
</div>
