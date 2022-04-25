<script>
    import '../app.css'
</script>

<main class="w-screen h-screen">
	<div class="flex flex-wrap w-full h-full">
		<nav class="flex flex-col bg-gray-500">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/settings">Settings</a>
		</nav>
        <div>
	        <slot />
        </div>
	</div>
</main>
