<script>
	import Backward from '$lib/svg/Backward.svelte';
	import Forward from '$lib/svg/Forward.svelte';
	import Pause from '$lib/svg/Pause.svelte';
	import Settings from '$lib/svg/Settings.svelte';
	import Sound from '$lib/svg/Sound.svelte';
	import Tempo from '$lib/svg/Tempo.svelte';

	let none = $state(true);
	let bpm = $state(120.34);
	let tempo = $state('4/4');
	let contador = $state(0);

	function calculaVelocidade() {
		return (60 / bpm) * 1000;
	}

	let metronome = setInterval(() => {
		contador++;
		if (contador > 4) contador = 1;
	}, calculaVelocidade());

	function iniciaMetronomo() {
		clearInterval(metronome());
		metronome();
		return (contador = 0);
	}

	function checkTempo(time) {
		return contador === time;
	}

	let [num, src, artist, song, time] = [
		1,
		'https://cdn-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/1900x1900-000000-80-0-0.jpg',
		'Nirvana',
		'Polly',
		'1:43'
	];

	// let width = $state(0)
	// const progressBar = setInterval(()=>{
	// 	width++
	// 	el.style.width = `${width}%`
	// },1000)
</script>

<section
	class="w-2xl shadow-xs m-1 mb-0 flex h-[99%] grow-0 flex-col justify-between rounded bg-zinc-950 p-4 shadow-blue-600"
>
	<div class="flex">
		<h3
			class="mx-auto select-none text-center text-xl text-white duration-100 hover:text-blue-400 hover:underline"
		>
			Metrônomo
		</h3>
		<button onclick={(none = !none)}>
			<Settings />
		</button>
	</div>
	<div class="flex-5/6">
		<h2 class="mt-4 text-center text-4xl font-thin text-white">{bpm}Bpm {tempo}</h2>
		<div class="mt-3 flex items-center justify-center gap-2">
			<Tempo num="1" tempo={checkTempo(1)} />
			<Tempo num="2" tempo={checkTempo(2)} />
			<Tempo num="3" tempo={checkTempo(3)} />
			<Tempo num="4" tempo={checkTempo(4)} />
		</div>
	</div>

	<div>
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
				<Forward/>
			</div>
			<div class="flex-1/3 flex items-center justify-center gap-1">
				<p class="text-xs text-white">{time} - <span class="text-gray-700">{time}</span></p>
				<Sound />
			</div>
		</section>
	</div>
</section>

<div
	class="absolute top-0 flex h-screen w-screen items-center justify-center bg-zinc-900/60"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-4">
		<h2 class="mt-6 text-center font-bold capitalize text-white">menu</h2>
	</div>
</div>
