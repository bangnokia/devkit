<script lang="ts">
	import Button from '../components/Button.svelte';
	import TextArea from '../components/TextArea.svelte';
	import Card from '../components/ui/Card.svelte';

	let input = '{"name":"daudau","age":32,"address":"19 Nguyen Trai"}';
	let output = '';
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
		<div class="grow flex">
			<TextArea label="Input" class="grow" bind:value={input}>
				<div slot="toolbar">
					<Button on:click={format}>Format</Button>
				</div>
			</TextArea>
		</div>
		<TextArea label="Output" class="grow" bind:value={output} />
	</div>
</Card>
