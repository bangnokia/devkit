<script lang="ts">
	export let type = 'button';
	let className = '';
	export { className as class };
</script>

<button
	{type}
	class={`px-5 py-0.5 border boder text-sm border-neutral-500 rounded bg-neutral-100 hover:bg-neutral-200 ${className}`}
	on:click
	{...$$restProps}
>
	<slot />
</button>
