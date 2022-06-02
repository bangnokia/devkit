<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import '../app.css';
	import 'uno.css';
	import JsonIcon from '../components/icons/JsonIcon.svelte';
    import modules from "../modules";
</script>

<main class="w-screen h-screen bg-gray-100 font-mono">
	<div class="flex flex-wrap w-full h-full items-stretch">
		<nav class="flex flex-col py-5 px-3 gap-2">
            <a href="/" class="mb-6 font-semibold text-xl text-orange-500 uppercase tracking-wider text-center hover:underline">
                <h1 class="">Devkits.app</h1>
            </a>
			{#each modules as module}
				<a href={module.slug} class="rounded-md px-2 py-1 hover:underline">
					<JsonIcon class="w-5 h-5 inline" />
					<span class="inline">{module.name}</span>
				</a>
			{/each}
		</nav>
		<div class="flex-1 p-5">
			<div class="rounded-lg bg-white w-full h-full">
				<slot />
			</div>
		</div>
	</div>
</main>
