<script>
	import '../app.css';
	import { onMount } from 'svelte'
	import nightwind from '$lib/nwpp'
    /*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
    */
	onMount(()=>{
        nightwind.mount();
    })

    $: console.log(`changed .dark ${(() => {let value;nightwind.dark.subscribe(_ => value = _);return value;})()}`);
</script>

<slot />
