<script lang="ts">
    import type { changeFunction, formErrors } from "./types";
    export let type: string;
    export let value: any;
    export let label: string;
    export let tabIndex: number;
    export let handleChange: changeFunction
    export let errors: formErrors = [];
    console.log(errors);
</script>

<label for={label}>{label}</label>
{#if type==="text"}
<input tabindex={tabIndex} name={label} type="text" bind:value={value} on:input={e => handleChange(type, label, value, tabIndex)} />
{:else if type="phone"}
<input tabindex={tabIndex} name={label} type="phone" bind:value={value} on:input={e => handleChange(type, label, value, tabIndex)} />
{:else if type="email"}
<input tabindex={tabIndex} name={label} type="email" bind:value={value} on:input={e => handleChange(type, label, value, tabIndex)} />
{:else if type="number"}
<input tabindex={tabIndex} name={label} type="number" bind:value={value} on:input={e => handleChange(type, label, value, tabIndex)} />
{/if}
{#if errors.length > 0}
{#each errors as error}
<div class="error">{error}</div>
{/each}
{/if}

<style>
    label, input {
        display: block;
    }
    
    input {
        margin-bottom: 9.89px;
    }

    label {
        margin-bottom: 6.11px;
        font-weight: bold;
    }

    .error {
        margin-bottom: 9.89px;
        color: red;
    }
</style>