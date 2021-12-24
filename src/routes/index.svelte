<script lang="ts">
    import Modal from '$lib/components/Modal.svelte';
    import { getNotificationsContext } from '$lib/svelte-notifications'
    import allpos from '$lib/svelte-notifications/src/positions'
    const { addNotification } = getNotificationsContext()
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