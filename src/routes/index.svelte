<script lang="ts">
    import Card from '../components/ui/Card.svelte';
    import modules from "../modules";
</script>

<Card name="Devkits.app">
    <p class="text-center">Welcome to Devkits.app</p>
    <div class="mt-10 grid grid-cols-4">
        {#each modules as module}
            <a href={module.slug} class="bg-gray-100 rounded p-4 hover:bg-orange-300 hover:text-white transition-colors">
                <h3 class="font-medium">{module.name}</h3>
            </a>
        {/each}
    </div>
</Card>
