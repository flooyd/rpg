<script>
	import '../app.css';
	export const ssr = false;
	import { characterIndex, areaInfo, inGame } from '$lib/stores/global';
</script>

<nav>
	<div>Mystery Girl</div>
	{#if $inGame}
		<div class="info">
			<div>Location: {$characterIndex}</div>
			<div>{$areaInfo}</div>
		</div>
	{/if}
</nav>

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bellefair&family=Oswald&display=swap');

	nav {
		background: lightcoral;
		height: 31px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 25px;
		padding: 4px 20px;
		font-family: 'Bellefair', serif;
	}

	.info {
		font-family: 'Oswald', sans-serif;
		display: flex;
		gap: 8px;
		font-size: 16px;
	}
</style>
