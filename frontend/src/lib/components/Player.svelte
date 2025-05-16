<script>
	import Sound from '$lib/svg/Sound.svelte';
	import Backward from '$lib/svg/Backward.svelte';
	import Forward from '$lib/svg/Forward.svelte';
	import Pause from '$lib/svg/Pause.svelte';

    let [num, src, artist, song, time] = [
		1,
		'https://cdn-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/1900x1900-000000-80-0-0.jpg',
		'Nirvana',
		'Polly',
		'1:43'
	];
</script>]

<div
	class="w-xs relative -z-0 mx-auto -mb-0.5 mt-10 h-1 rounded-2xl bg-gray-400 bg-gradient-to-l from-0% to-100%"
>
	<div class="rounded-2x h-1 w-4 bg-blue-700"></div>
</div>
<section
	class="w-sm relative top-0 mx-auto flex h-12 items-center justify-center rounded-full bg-gray-900 shadow-sm shadow-gray-950"
>
	<div class="flex-1/3 flex select-none items-center justify-center gap-1">
		<p class="ml-1 mr-1.5 text-2xl text-white">{num}</p>
		<img {src} class="size-10 rounded-sm" alt="album cover" />
		<div class="text-white">
			<p class="-mb-1 text-xs duration-100 hover:text-blue-500 hover:underline">{artist}</p>
			<p class="text-xl font-semibold duration-100 hover:text-blue-500 hover:underline">
				{song}
			</p>
		</div>
	</div>
	<div class="flex-1/3 flex items-center justify-center">
		<Backward />
		<Pause />
		<Forward />
	</div>
	<div class="flex-1/3 flex items-center justify-center gap-1">
		<p class="text-xs text-white">{time} - <span class="text-gray-700">{time}</span></p>
		<Sound />
	</div>
</section>
