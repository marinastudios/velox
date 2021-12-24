<script context="module">
    export function load({page, fetch, session, stuff}) {
        return {
            props: {
                name: page.params.name
            }
        }
    }
</script>
<script>
    import { onMount } from 'svelte';
    export let name = "World"
    import { getNotificationsContext } from '$lib/svelte-notifications'
    import Modal from '$lib/components/Modal.svelte';
    const { addNotification } = getNotificationsContext()
    let modal
    onMount(()=>{
        addNotification({
            type: 'success',
            text: `Hello ${name}!`,
            position: 'top-right',
            removeAfter: 500,
        })
        modal.open('Hello!', `Hello ${name}!`)
    })
</script>
<Modal type="danger" callback={()=>{}} bind:this={modal}></Modal>
Hello {name}!