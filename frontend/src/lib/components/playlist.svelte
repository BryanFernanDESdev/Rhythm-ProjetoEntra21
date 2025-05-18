<script>
	import Settings from '$lib/svg/Settings.svelte';
	import Close from '$lib/svg/Close.svelte';

	let none = $state(true);
</script>

<div class="m-2 mb-0 mr-0 h-[98.5%] w-full rounded border border-blue-500/20 bg-zinc-950 p-4">
	<div class="flex">
		<h2
			class="mx-auto select-none text-center text-xl text-white duration-100 hover:text-blue-400 hover:underline"
		>
			Playlists
		</h2>
		<button onclick={(none = !none)}>
			<Settings />
		</button>
	</div>
</div>

<div
	class="fixed z-10 flex h-screen w-screen items-center justify-center bg-white/10"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl z-10 h-[450px] bg-zinc-950 p-1 shadow shadow-gray-950">
		<div class="flex items-center">
			<h2
				class="duration-50 mx-auto text-center font-bold capitalize text-white hover:text-blue-500"
			>
				Playlists
			</h2>
			<button
				onclick={() => (none = !none)}
				class=" duration-50 -ml-8 inline h-8 w-8 text-right hover:bg-red-600"
			>
				<Close />
			</button>
		</div>
	</div>
</div>
