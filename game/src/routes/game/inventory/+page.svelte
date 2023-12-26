<script>
	import Card from '$lib/components/Card.svelte';
	import Form from '$lib/components/form/Form.svelte';
</script>

<section>
	<Card value={'A'} suit={'H'} />
	<Card value={2} suit={'C'} />
	<Card value={10} suit={'D'} />
	<Card value={'5'} suit={'S'} />
	<Card value={'K'} suit={'C'} />
	<Card value={'Q'} suit={'D'} />
	<Card value={'A'} suit={'H'} />
	<Card value={6} suit={'C'} />
	<Card value={9} suit={'S'} />
	<Card value={'5'} suit={'D'} />
	<Card value={'J'} suit={'H'} />
	<Card value={'Q'} suit={'C'} />
	<Form/>
</section>

<style>
	section {
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
