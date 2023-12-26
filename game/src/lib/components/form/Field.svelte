<script lang="ts">
    import type { changeFunction } from "./types";
    export let type: string;
    export let value: any;
    export let label: string;
    export let tabIndex: number;
    export let handleChange: changeFunction
</script>

<label for={label}>{label}</label>
{#if type==="text"}
<input tabindex={tabIndex} name={label} type="text" bind:value={value} on:input={e => handleChange(type, value, label)} />
{:else if type="phone"}
<input tabindex={tabIndex} name={label} type="phone" bind:value={value} on:input={e => handleChange(type, value, label)} />
{:else if type="email"}
<input tabindex={tabIndex} name={label} type="email" bind:value={value} on:input={e => handleChange(type, value, label)} />
{:else if type="number"}
<input tabindex={tabIndex} name={label} type="number" bind:value={value} on:input={e => handleChange(type, value, label)} />
{/if}