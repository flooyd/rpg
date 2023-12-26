<script>
// @ts-nocheck
    export let value;
    export let suit;

    const numbers = {
        A: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13
    }

    const getColor = (suit) => {
        if(suit === 'C' || suit === 'S') {
            return '#333';
        }

        if(suit === 'D' || suit === 'H') {
            return 'crimson'
        }
    }
</script>

<div class="card" style="color: {getColor(suit)}">
    <div class="cardTop">
        <div class="value">{value}</div>
        <div>{suit}</div>
    </div>
    <div class="cardMid">
        {#if value === 'K'}
        <div>KING</div>
        {:else if value === 'J'}
        <div>JACK</div>
        {:else if value === 'Q'}
        <div>QUEEN</div>
        {:else}
        {#each {length: numbers[value]} as _, i}
            <div>{suit}</div>
        {/each}
        {/if}
    </div>
    <div class="cardBot">
        <div>{suit}</div>
        <div class="value">{value}</div>
    </div>
</div>

<style>
    .card {
        background: white;
        border: 1px solid black;
        width: 100px;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 6.11px;
        font-size: 16px;
        margin-right: 9.89px;
        margin-bottom: 9.89px;
        gap: 0px;
    }

    .value {
        font-weight: bold;
    }

    .cardTop {
        display: flex;
        flex-direction: column;
        height: 30%;
    }
    
    .cardMid {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6.11px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: wrap;
        height: 40%;
    }

    .cardBot {
        display: flex;
        flex-direction: column;
        transform: rotate(180deg);
        height: 30%;
    }
</style>