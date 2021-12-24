<script>
	import Notifications from '$lib/svelte-notifications'; //svelte notification library
	import '../app.css';
</script>

<Notifications>
	<slot />
</Notifications>
