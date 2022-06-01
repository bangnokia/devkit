<script lang="ts">
    import CopyToClipboard from "svelte-copy-to-clipboard";
    import Button from './Button.svelte';

    export let text = '';

    let iconClass = 'i-tabler-clipboard';

    const success = function () {
        iconClass = 'i-tabler-clipboard-check text-orange-500';
        setTimeout(function () {
            iconClass = 'i-tabler-clipboard';
        }, 1000)
    }

</script>

<CopyToClipboard text={text} on:copy={success} let:copy>
    <Button on:click={copy} class="absolute top-0 right-0 flex items-center mt-2 mr-2 !p-1 border-0 bg-gray-100/50" title="Copy">
        <i class={`w-5 h-5 text-gray-500 ${iconClass}`}></i>
    </Button>
</CopyToClipboard>
