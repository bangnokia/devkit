<script lang="ts">
	import Button from '../components/Button.svelte';
	import TextArea from '../components/TextArea.svelte';
	import Card from '../components/ui/Card.svelte';
	import Editor from '../components/Editor.svelte';
	import { onMount } from 'svelte';

	let input = '';
	let output = '';
	let inputElement: HTMLElement;

	onMount(() => {
		inputElement.focus();
	});

	function format() {
		try {
			output = JSON.stringify(JSON.parse(input), null, 2);
		} catch (e: unknown) {
			if (typeof e === 'string') {
				output = e;
			} else if (e instanceof Error) output = e.message;
		}
	}
</script>

<Card name="Json formatter">
	<div class="grid grid-cols-2 gap-5 h-full pb-5">
		<div class="grow flex-1 flex">
			<TextArea label="Input" class="grow" bind:value={input} bind:this={inputElement}>
				<div slot="toolbar">
					<Button on:click={format}>Format</Button>
				</div>
			</TextArea>
		</div>
		<Editor label="Output" bind:value={output} canCopy />
	</div>
</Card>
