<script lang="ts">
	export let label = '';
	export let value: string;
	export let id = '';

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
	<textarea
		{id}
		bind:value
		class={`p-3 border border-neutral-500 rounded focus-visible:outline-none focus-visible:shadow ${className}`}
	/>
</div>
