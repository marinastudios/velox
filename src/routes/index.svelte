<script lang="ts">
    import Modal from '$lib/components/Modal.svelte';
    import { getNotificationsContext } from 'svelte-notifications'
    const { addNotification } = getNotificationsContext()
    let modal
    let value
</script>
<Modal bind:this={modal} type="danger" callback={(response)=>{value=response}}></Modal>
<main>
    <h1>TTSKN test</h1>
    <button on:click={()=>addNotification({
        text: 'Test',
        position: 'top-right',
        type: 'success'
    })}>
    Send test notification
    </button><br>
    <button on:click={modal.open}>
        Show Modal
    </button>
</main>