<script lang="ts">
	export let type = 'button';
	let className = '';
	export { className as class };
</script>

<button
	{type}
	class={`px-5 py-0.5 border text-sm border-neutral-500 rounded bg-neutral-100 transition-colors duration-75 hover:bg-neutral-200 ${className}`}
	on:click
	{...$$restProps}
>
	<slot />
</button>
