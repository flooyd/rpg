<script>
// @ts-nocheck

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { inGame } from '$lib/stores/global';

	function routeToPage(route, replaceState) {
		goto(`/${route}`, { replaceState });
	}
	
	$inGame = false;
	export let data;
</script>

<section>
	<div class="box">
		<h1>Welcome to the RPG, "Mystery Girl"</h1>
		<div class="buttonDiv">
			<button on:click={() => routeToPage('game', false)}>Begin</button>
			<button>About</button>
		</div>
	</div>
	<div class="box">
		<h1>Profile</h1>
		<p>User id: {data.userId}</p>
		<p>Username: {data.username}</p>
		<form method="post" action="?/logout" use:enhance>
			<input type="submit" value="Sign out" />
		</form>
	</div>
</section>

<style>
	.buttonDiv {
		display: flex;
		justify-content: right;
	}

	.buttonDiv button {
		margin-left: 8px;
	}
</style>
