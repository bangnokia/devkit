<script lang="ts">
import TextArea from "../components/TextArea.svelte";
import Card from "../components/ui/Card.svelte";

let value = '{"name":"daudau","age":32,"address":"19 Nguyen Trai"}';

</script>

<Card name="Json formatter">
    <div class="grid grid-cols-2 gap-5">
        <TextArea label="Input" bind:value={value}/>
        <TextArea label="Output" />
    </div>
</Card>
