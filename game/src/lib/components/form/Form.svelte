<script lang="ts">
	import Field from './Field.svelte';
	import type {
		changeFunction,
		submitFunction,
		validateFunction,
		formFields,
		formErrors
	} from './types';

	//create type for formErrors

	let formErrors: formErrors = [];

	const handleChange: changeFunction = (type, label, value, tabIndex) => {
		validateForm(type, label, value);
	};

	const handleSubmit: submitFunction = (event) => {
		event.preventDefault();
		if (formErrors.length === 0) {
			console.log('submit');
		}
	};

	const validateForm: validateFunction = (type, label, value) => {
		formFields.forEach((field) => {
			if (type === 'text') {
				console.log('true', value.length);
				if (value.length < 3) {
					if (formErrors.includes(`${label} must be at least 3 characters long`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be at least 3 characters long`
						);
					}
					formErrors.push(`${label} must be at least 3 characters long`);
				} else {
					if (formErrors.includes(`${label} must be at least 3 characters long`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be at least 3 characters long`
						);
					}
				}
			}
			if (type === 'email') {
				if (!value.includes('@')) {
					if (formErrors.includes(`${label} must be a valid email address`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be a valid email address`
						);
					}
					formErrors.push(`${label} must be a valid email address`);
				} else {
					if (formErrors.includes(`${label} must be a valid email address`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be a valid email address`
						);
					}
				}
			}
			if (type === 'phone') {
				if (value.length < 10) {
					if (formErrors.includes(`${label} must be a valid phone number`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be a valid phone number`
						);
					}
					formErrors.push(`${label} must be a valid phone number`);
				} else {
					if (formErrors.includes(`${label} must be a valid phone number`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be a valid phone number`
						);
					}
				}
			}
			if (type === 'number') {
				if (value < 0) {
					if (formErrors.includes(`${label} must be a positive number`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be a positive number`
						);
					}
					formErrors.push(`${label} must be a positive number`);
				} else {
					if (formErrors.includes(`${label} must be a positive number`)) {
						formErrors = formErrors.filter(
							(error) => error !== `${label} must be a positive number`
						);
					}
				}
			}
		});

		formErrors = formErrors;
		if (formErrors.length > 0) {
			return false;
		}
		return true;
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

	$: console.log(formErrors);
</script>

<form on:submit={(e) => handleSubmit(e)}>
	{#each formFields as field}
		<Field
			tabIndex={field.tabIndex}
			value={field.value}
			type={field.type}
			label={field.label}
			errors={formErrors.filter((error) => error.includes(field.label))}
			{handleChange}
		/>
	{/each}
</form>
