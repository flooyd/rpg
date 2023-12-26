<script lang="ts">
	
	import Scene from '$lib/components/Scene.svelte';
	import { characterIndex, events, inGame } from '$lib/stores/global.js';
	
	export let data;
	$inGame = true;
	$characterIndex = 1;
	let r = 90;
	let currentMessages = data.data.messages;
	$events = data.data.events;
	$: console.log($events);
	$: if(events[0]) console.log('hello world')
	let messageIndex = 0;
	let currentMessage = currentMessages[messageIndex];
	let currentDialogCharacterImage = 'girl';
	let currentDialogCharacterAlt = 'girl';

	function onKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 's':
				$characterIndex += 16;
				break;
			case 'd':
				$characterIndex += 1;
				break;
			case 'a':
				$characterIndex -= 1;
				break;
			case 'w':
				$characterIndex -= 16;
				
				break;
			case 'r':
				break;
		}
	}

	const getCharacterDialogImageName = (img: boolean) => {
		if (currentMessage.character === 'guy' || currentMessage.character === 'John') {
			if (img) return 'guy';
			return currentMessage.character;
		}
		if (currentMessage.character === 'girl' || currentMessage.character === 'Saitee') {
			if (img) return 'girl';
			return currentMessage.character;
		}
		if (currentMessage.character === 'wolf' || currentMessage.character === 'Token') {
			if (img) return 'wolf';
			return currentMessage.character;
		}

		return '';
	};

	let camera: any;
	$: console.log(camera, 'camera');
</script>

<section>
    <Scene />

	<!-- <div class="dialog">
			<div class="character">
				<img
					src="/images/{currentDialogCharacterImage}.png"
					alt="A stick figure {currentDialogCharacterAlt}"
				/>
			</div>
			<div class="message">
				{currentMessage.message}
			</div>
			<div class="expression">
				{currentMessage.character} - {currentMessage.expression}
			</div>
			<div
				class="next"
				on:click={() => processMessage()}
				role="button"
				tabindex="0"
				on:keydown={() => {}}
			>
				{'=>'}
			</div>
		</div> -->
</section>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
	canvas {
		background: red;
	}
	.dialog {
		position: absolute;
		bottom: 5px;
		height: 200px;
		width: calc(100% - 2px);
		background: whitesmoke;
		display: flex;
		font-size: 20px;
	}
	.message {
		padding-top: 8px;
	}
	.expression {
		position: absolute;
		bottom: 0px;
		left: 0px;
		padding-left: 8px;
		padding-bottom: 8px;
		font-family: 'Bellefair', serif;
	}
	.character {
		border: 3px solid black;
		border-radius: 4px;
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
		border-left: none;
		border-top: none;
		height: fit-content;
		margin-right: 16px;
	}
	.next {
		position: absolute;
		bottom: 0px;
		right: -1px;
		background: #333;
		color: white;
		padding: 8px 31px;
		font-size: 31px;
	}
	.next:hover {
		cursor: pointer;
		color: lightcoral;
	}
	.character img {
		width: 75px;
	}
	section {
		display: flex;
		justify-content: center;
		background: #333;
		height: calc(100vh - 39px);
	}
	.viewport {
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		align-items: center;
		justify-content: center;
		margin: 0px;
		padding: 0px;
		height: 650px;
		width: 1000px;
	}
</style>
