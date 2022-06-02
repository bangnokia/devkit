<script lang="ts">
	import CopyButton from './CopyButton.svelte';
	import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
	import { javascript } from '@codemirror/lang-javascript';
	import { onMount } from 'svelte';

	export let label = '';
	export let value: string;
	export let id = '';
	export let canCopy = false;

	let className = '';
	export { className as class };
	export function focus() {
		textarea.focus();
	}

	let textarea: HTMLElement;
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
			bind:this={textarea}
			class={`editor w-full h-full p-3 border border-neutral-500 rounded focus-visible:outline-none focus-visible:shadow ${className}`}
		/>

		{#if canCopy}
			<CopyButton text={value} />
		{/if}
	</div>
</div>
