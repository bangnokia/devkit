<script lang="ts">
	export let label = '';
	export let value: string;
	export let id = '';

	let className = '';
	export { className as class };
</script>

<div class="flex flex-col">
	<label for={id}>{label}</label>
	<textarea {id} bind:value class={`p-3 border border-slate-400 rounded ${className}`} />
</div>
