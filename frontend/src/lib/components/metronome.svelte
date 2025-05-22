<script>
	import Settings from '$lib/svg/Settings.svelte';
	import Tempo from '$lib/components/Tempo.svelte';
	import Player from './Player.svelte';
	import Close from '$lib/svg/Close.svelte';

	let none = $state(true);
	let bpm = $state(100);
	let tempo = $state('4/4');
	let contador = $state(0);

	let velocidade = () => (60 / bpm) * 1000

	let metronome = setInterval(() => {
		contador++;
		if (contador > 4) contador = 1;	
	}, velocidade())

	function iniciaMetronomo() {
		clearInterval(metronome);
		metronome;
		return (contador = 0);
	}

	function checkTempo(time) {
		return contador === time;
	}
</script>

<section
	class="w-2xl m-2 flex h-[98.5%] grow-0 flex-col justify-between rounded border border-blue-500/20 bg-zinc-950 p-4"
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
			<Tempo num="1" focus={checkTempo(1)} tempo={false} />
			<Tempo num="2" focus={checkTempo(2)} tempo={false} />
			<Tempo num="3" focus={checkTempo(3)} tempo={false} />
			<Tempo num="4" focus={checkTempo(4)} tempo={false} />
		</div>
	</div>

	<div
		class="w-xs mx-auto flex h-20 flex-col items-center justify-center bg-gray-900 text-white shadow shadow-gray-950"
	>
		<div class="flex w-60 text-center">
			<label for="bpm" class="block w-[50%]">BPM</label>
			<label for="compasso" class="block w-[50%]">Compasso</label>
		</div>
		<div class="flex gap-2">
			<input
				type="number"
				bind:value={bpm}
				onchange={iniciaMetronomo(bpm)}
				class="w-[50%] border border-gray-700 text-center"
				min="1"
				pattern="\d*"
			/>
			<select
				name="compasso"
				id="compasso"
				bind:value={tempo}
				class="w-[50%] border border-gray-700 bg-gray-900 text-center"
			>
				<option value="2/4">2/4</option>
				<option value="3/4">3/4</option>
				<option value="4/4">4/4</option>
				<option value="5/4">5/4</option>
				<option value="6/4">6/4</option>
				<option value="3/8">3/8</option>
				<option value="6/8">6/8</option>
				<option value="9/8">9/8</option>
				<option value="12/8">12/8</option>
				<option value="5/8">5/8</option>
				<option value="7/8">7/8</option>
			</select>
		</div>
	</div>
	<div>
		<Player />
	</div>
</section>

<div
	class="fixed inset-0 z-10 flex h-[100dvh] w-[100dvw] items-center justify-center bg-white/15 transition-opacity duration-300 {none
		? 'pointer-events-none opacity-0'
		: 'opacity-100'}"
>
	<div
		class="w-2xl z-10 h-[450px] transform bg-zinc-950 p-1 shadow shadow-gray-950 transition-all duration-300 {none
			? '-translate-y-20 opacity-0'
			: 'translate-y-0 opacity-100'}"
	>
		<div class="flex items-center">
			<h2 class="mx-auto text-center font-bold capitalize text-white hover:text-blue-500">
				Metrônomo
			</h2>
			<button
				onclick={() => (none = !none)}
				class="-ml-8 inline h-8 w-8 text-right hover:bg-red-600"
			>
				<Close />
			</button>
		</div>
	</div>
</div>
