<script lang="ts">
    import CopyButton from "./CopyButton.svelte";
    import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup";
    import {javascript} from "@codemirror/lang-javascript";
    import {onMount} from "svelte";

    export let label = '';
    export let value: string;
    export let id = '';
    export let canCopy = false;

    let className = '';
    export {className as class};

    let editorElement;
    let editor: EditorView;
    let state: EditorState;

    $: if (editor) {
        editor.dispatch({
            changes: {from: 0, to: editor.state.doc.length, insert: value}
        })
    }

    onMount(() => {
        setupEditor()
        console.log(editorElement.offsetHeight)
    })

    function setupEditor() {
        const customTheme = EditorView.theme({
            '&': {fontFamily: "'Roboto Mono'", height: '100%', overflow: 'hidden'},
            ".cm-editor .cm-content": {fontFamily: "'Roboto Mono'"},
            ".cm-scroller": {fontFamily: "'Roboto Mono'"},
            ".cm-gutters": {background: 'transparent', borderRight: 'none',},
            ".cm-gutter.cm-lineNumbers": {minWidth: '35px', fontSize: '14px'}
        })
        state = EditorState.create({
            doc: value,
            extensions: [
                customTheme,
                basicSetup,
                javascript(),
                EditorView.lineWrapping,
            ]
        })

        editor = new EditorView({
            state: state,
            parent: editorElement,
        })
    }
</script>

<div class="w-full h-full flex flex-col gap-1">
    <div class="flex items-center justify-between">
        <label for={id}>{label}</label>
        <div class="flex items-center">
            <slot name="toolbar"/>
        </div>
    </div>
    <div class="relative flex-grow overflow-hidden max-h-max" style="height: 300px">
        <div
                {id}
                bind:this={editorElement}
                class={`w-full h-full rounded border border-neutral-500 overflow-scroll focus-visible:outline-none focus-visible:shadow ${className}`}
        />

        {#if canCopy}
            <CopyButton text={value}/>
        {/if}
    </div>
</div>
