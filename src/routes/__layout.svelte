<script lang="ts">
	import JsonIcon from '../components/icons/JsonIcon.svelte'
	import '../app.css';

	interface NavItem {
		name: string;
		slug: string;
	}

	const navItems: NavItem[] = [
		{
			name: 'JSON formatter',
			slug: '/'
		},
		{
			name: 'HTML formatter',
			slug: '/about'
		},
		{
			name: 'JSON encode',
			slug: '/contact'
		}
	];
</script>

<main class="w-screen h-screen bg-gray-100">
	<div class="flex flex-wrap w-full h-full">
		<nav class="flex flex-col py-5 gap-2">
			{#each navItems as item}
				<a href={item.slug} class="hover:bg-neutral-300 px-2 py-0.5">
					<JsonIcon class="w-5 h-5 inline" />
					<span class="text-base inline">{item.name}</span>
				</a>
			{/each}
		</nav>
		<div class="grow bg-neutral-500 p-5">
			<slot />
		</div>
	</div>
</main>
