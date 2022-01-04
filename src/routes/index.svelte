<script lang="ts">
    // Utility libraries
    import Modal from '$lib/components/Modal.svelte';
    import { getNotificationsContext } from '$lib/svelte-notifications'
    const { addNotification } = getNotificationsContext()
    // just for testing
    import allpos from '$lib/svelte-notifications/src/positions'
    let modal
    let value
    function createAll() {
        for(let pos of allpos) {
            addNotification({
                text: 'Test',
                position: pos,
                type: 'success',
                removeAfter: 2000,
            })
        }
    }
</script>
<Modal bind:this={modal} type="danger" callback={(response)=>{value=response}}></Modal>
<main>
    <h1>TTSKN test</h1>
    <button on:click={createAll}>
    Send test notification
    </button><br>
    <button on:click={modal.open}>
        Show Modal
    </button>
</main>
