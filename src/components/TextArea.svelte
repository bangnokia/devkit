<script lang="ts">
    export let label = '';
    export let value;

    let className = '';
    export {className as class};

</script>

<div class="flex flex-col">
    <label>{label}</label>
    <textarea bind:value={value} class={`p-3 border border-slate-400 rounded ${className}`}></textarea>
</div>
