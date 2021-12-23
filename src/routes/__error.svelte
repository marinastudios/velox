<script context="module">
    // https://kit.svelte.dev/docs#loading
    // context=module allows you to run code that would usually be ran on a server and return svelte props
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
    // normal svelte code
	export let title;
</script>

<h1>{title}</h1>
<svelte:head>
    <!-- This allows you to change the header of the page https://svelte.dev/docs#template-syntax-svelte-head -->
    <title>Error: {title}</title>
</svelte:head>