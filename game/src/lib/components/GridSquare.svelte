<script lang='ts'>
    import { characterIndex, events } from "$lib/stores/global";
    export let index: number;

    let squareH = 62;
    let squareW = 62;
    let event = null;
    let background = 'lightbrown';
    $: if($events) {
        for(let i = 0; i < $events.length; i++) {
            if($events[i].indices.includes(`,${index},`)) {
                event = $events[i];
            }
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseleave={() => background='#FAD5A5'}  on:mouseover={() => background = 'red'} class='square' style="background: {background}; width: {squareW}px; height: {squareH}px">
{#if index === $characterIndex}
<!-- svelte-ignore a11y-missing-attribute -->
<img src="images/girl.png"/>
{/if}
{#if index === 57 || index === 58 || index === 73 || index === 74}
<div class="bluecard">
</div>
{/if}
{#if index !== 57 && index !== 58 && index !== 73 && index !== 74 && index !== $characterIndex }
{index}
{/if}
</div>
<style>
    .square {
        background: #FAD5A5;
        border: 1px solid transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bluecard {
        height: 32px;
        width: 18px;
        background: lightblue;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
