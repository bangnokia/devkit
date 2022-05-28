<script lang="ts">
	export let name: string;
</script>

<div class="p-5 rounded-lg bg-white h-full">
	<h1 class="font-semibold uppercase text-center">{name}</h1>

	<div class="pt-5 h-full">
		<slot />
	</div>
</div>
