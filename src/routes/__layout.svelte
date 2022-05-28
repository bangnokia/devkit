<script lang="ts">
	import '../app.css';
	import JsonIcon from '../components/icons/JsonIcon.svelte';
	import Card from '../components/ui/Card.svelte';

	interface NavItem {
		name: string;
		slug: string;
	}

	const navItems: NavItem[] = [
		{
			name: 'JSON formatter',
			slug: '/json-formatter'
		},
		{
			name: 'JSON encode',
			slug: '/json-encode'
		},
		{
			name: 'HTML formatter',
			slug: '/html-formatter'
		}
	];
</script>

<main class="w-screen h-screen bg-gray-100 font-mono">
	<div class="flex flex-wrap w-full h-full items-stretch">
		<nav class="flex flex-col py-5 px-3 gap-2">
			{#each navItems as item}
				<a href={item.slug} class="rounded-md px-2 py-1 hover:underline">
					<JsonIcon class="w-5 h-5 inline" />
					<span class="inline">{item.name}</span>
				</a>
			{/each}
		</nav>
		<div class="grow p-5">
			<div class="p-5 rounded-lg bg-white w-full h-full">
				<slot />
			</div>
		</div>
	</div>
</main>
