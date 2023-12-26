<script lang="ts">
	import { onMount } from 'svelte';
	import GridSquare from './GridSquare.svelte';

	let height = 0;
	let width = 0;
	let error = '';

	onMount(() => {
		height = 720;
		width = 1280;
		console.log('height', height, 'width', width);
		if (width < 1280 || height < 720) {
			error = `Minimum screen width is 1280. Yours is ${width}. Minimum screen height is 720. Yours is ${height}`;
		}
	});
</script>

<div class="viewport">
	{#each Array.from(Array(160).keys()).slice(16) as i }
		<GridSquare index={i} />
	{/each}
</div>

<style>
	.viewport {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: flex-start;
		width: 1040px;
		margin-top: 20px;
	}
</style>
