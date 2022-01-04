<script>
	import '../app.css';
	import Notifications from '$lib/svelte-notifications'; //svelte notification library
	import { onMount } from 'svelte'
	import nightwind from '$lib/nwpp'
    $: dark = nightwind.dark
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
        nightwind.dark = nightwind.getDark();
        (function() {
            function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                if (hasPersistedPreference) {
                    return persistedColorPreference;
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                    return mql.matches ? 'dark' : 'light';
                }
                return 'light';
            }
        getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
        })()
    })
    nightwind.toggle = () => {
        nightwind.dark = !nightwind.dark
        nightwind.oldtoggle()
    }
    nightwind.enable = () => {
        nightwind.dark = dark
        nightwind.oldenable(dark)
    }
</script>

<Notifications>
	<slot />
</Notifications>
