<script lang="ts">
	export let id: string;

	const modalId = `notify-button-modal-${id}`;
</script>

<span class="tooltip tooltip-top pt-9" data-tooltip="Receber Notificações">
	<label class="btn btn-circle btn-primary h-16 w-16" id="notify-button-{id}" for={modalId}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-8 h-8"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
			/>
		</svg>
	</label>
</span>

<input class="modal-state" id={modalId} type="checkbox" />
<div class="modal">
	<label class="modal-overlay" for={modalId} />
	<div class="modal-content flex flex-col gap-5">
		<label for={modalId} class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		<h2 class="text-xl">Receber Notificações</h2>
		<span>Queres receber notificações sobre futuros leaks que afetem as tuas credenciais?</span>
		<div class="flex gap-3">
			<button class="btn btn-error btn-block">Sim</button>
			<button class="btn btn-block">Não</button>
		</div>
	</div>
</div>
