<h1 class='text-5xl font-bold'>Welcome to SvelteKit</h1>
<p>Visit <a class='text-blue-600 uppercase' href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation
</p>
<a href='/app'>Go to app</a>
<script>
	let count = 0;
	$: doubled = count * 2;
	function handleClick() {
		count += 1;
	}
</script>

<button on:click="{handleClick}">Click me!</button>

<p>{count} doubled is {doubled}</p>
