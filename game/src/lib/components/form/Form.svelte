<script lang="ts">
	import Field from './Field.svelte';
	import type { changeFunction, formFields } from './types';
	const handleChange: changeFunction = (type, label, value) => {
		console.log('type', type);
		console.log('label', label);
		console.log('value', value);
	};

	export let formFields: formFields = [
		{
			label: 'Text Example',
			type: 'text',
			value: 'hello, world',
			tabIndex: 0
		},
		{
			label: 'Email Example',
			type: 'email',
			value: 'test@gmail.com',
			tabIndex: 1
		},
		{
			label: 'Phone Example',
			type: 'phone',
			value: '555-123-4567',
			tabIndex: 2
		},
		{
			label: 'Number Example',
			type: 'number',
			value: 1,
			tabIndex: 3
		}
	];

	console.log(formFields);
</script>

<form>
	{#each formFields as field}
		<Field
			tabIndex={field.tabIndex}
			value={field.value}
			type={field.type}
			label={field.label}
			{handleChange}
		/>
	{/each}
</form>
