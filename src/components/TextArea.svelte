<script lang="ts">
    import CopyButton from "./CopyButton.svelte";

	export let label = '';
	export let value: string;
	export let id = '';
	export let canCopy = false;

	let className = '';
	export { className as class };
</script>

<div class="w-full h-full flex flex-col gap-1">
	<div class="flex items-center justify-between">
		<label for={id}>{label}</label>
		<div class="flex items-center">
			<slot name="toolbar" />
		</div>
	</div>
	<div class="relative flex-grow">
		<textarea
			{id}
			bind:value
			class={`w-full h-full p-3 border border-neutral-500 rounded focus-visible:outline-none focus-visible:shadow ${className}`}
		/>

		{#if canCopy}
            <CopyButton />
		{/if}
	</div>
</div>
