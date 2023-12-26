<script lang="ts">
    import Field from "./Field.svelte";
    import type { changeFunction } from "./types";
    const handleChange: changeFunction = (type, label, value) => {
        console.log('type', type);
        console.log('label', label);
        console.log('value', value);
    }
</script>

<form>
    <Field tabIndex={0} value="hello, world" type="text" label="Text Example" {handleChange} />
    <Field tabIndex={1} value="floydtjones@gmail.com" type="email" label="Email Example" {handleChange} />
    <Field tabIndex={2} value="555-123-4567" type="phone" label="Phone Example" {handleChange} />
    <Field tabIndex={3} value={1} type="number" label="Number Example" {handleChange} />
</form>