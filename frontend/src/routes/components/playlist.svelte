<script>
	import Settings from './Settings.svelte';

	let none = $state(true);
</script>

<div class="m-1 mb-0 h-[99%] w-full rounded bg-zinc-950 p-4 shadow shadow-neutral-950">
	<div class="flex">
		<h2
			class="mx-auto select-none text-center text-xl text-white duration-100 hover:text-green-400 hover:underline"
		>
			Playlists
		</h2>
		<Settings />
	</div>
</div>

<div
	class="absolute top-0 flex h-screen w-screen items-center justify-center bg-zinc-900/60"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-4">
		<h2 class="mt-6 text-center font-bold capitalize text-white">menu</h2>
	</div>
</div>
