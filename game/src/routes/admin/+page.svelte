<script>
	import { currentField } from '$lib/stores/global';
    import { currentType } from '$lib/stores/global';
    import { createForm } from "svelte-forms-lib";

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: "",
        name: "",
        email: ""
      },
      onSubmit: values => {
        alert(JSON.stringify(values));
      }
    });
</script>

<section>
	<div class="box">
		<h1>Admin</h1>
		<button disabled={$currentType === 'message'} on:click={() => $currentType = 'message'}>Add Message</button>
		<button disabled={$currentType === 'saga'} on:click={() => $currentType = 'saga'}>Add Saga</button>
		<button disabled={$currentType === 'chapter'} on:click={() => $currentType = 'chapter'}>Add Chapter</button>
	</div>
	<div class="box">
		<h1>Add Message</h1>
		<form on:submit={handleSubmit}>
			<label for="title">Saga</label>
			<select
			  id="saga"
			  name="saga"
			  on:change={handleChange}
			  bind:value={$form.title}>
			  <option></option>
			  <option>The beginning</option>
			  <option>The temple</option>
			  <option>The other side</option>
			</select>
			<label for="chapter">Chapter</label>
			<select
			  id="chapter"
			  name="chapter"
			  on:change={handleChange}
			  bind:value={$form.title}>
			  <option>1</option>
			  <option>2</option>
			  <option>3</option>
			</select>
		
			<label for="name">Character</label>
			<input
			  id="character"
			  name="character"
			  on:change={handleChange}
			  bind:value={$form.name}
			/>
		
			<label for="email">Message</label>
			<input
			  id="message"
			  name="message"
			  on:change={handleChange}
			  bind:value={$form.email}
			/>

			<label for="email">Expression</label>
			<input
			  id="expression"
			  name="expression"
			  on:change={handleChange}
			  bind:value={$form.email}
			/>
		
			<button type="submit">Submit</button>
		  </form>
	</div>
</section>

<style>
	input, select, label {
		width: 200px;
		display: block;
		margin-bottom: 8px;
		border: none;
		padding: 0px;
	}
	label {
		margin-bottom: 4px;
	}
</style>

