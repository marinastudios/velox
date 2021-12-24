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
    export let name = "World"
</script>
Hello {name}!