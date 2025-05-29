<script>
	import Settings from '$lib/svg/Settings.svelte';
	import Tempo from '$lib/components/Tempo.svelte';
	import Player from './Player.svelte';
	import Close from '$lib/svg/Close.svelte';

	let none = $state(true);

	let bpm = $state(100);
	let tempo = $state('4/4');
	let contador = $state(0);

	let velocidade = $derived((60 / bpm) * 1000);

	let tempos = $derived(tempo.split('/')[1]);

	let metronome = setInterval(() => {
		contador = contador + 1;
		if (contador > tempo.split('/')[0]) contador = 1;
	}, velocidade);

	function iniciaMetronomo() {
		contador = 0;
		clearInterval(metronome);
		metronome = setInterval(() => {
			contador = contador + 1;
			if (contador > tempo.split('/')[0]) contador = 1;
		}, velocidade);
	}

	function checkTempo(time) {
		return contador === time;
	}

	function calculaTempo() {
		let num = parseInt(tempo.split('/')[0]);
		nums = [];
		for (let i = 1; i < num + 1; i++) {
			nums.push(i);
		}
	}

	let nums = $derived([1, 2, 3, 4]);
</script>

<section
	class="w-2xl m-2 flex h-[98.5%] grow-0 flex-col justify-between rounded border border-blue-500/20 bg-zinc-950 p-4"
>
	<div class="flex">
		<h3
			class="mx-auto text-center text-xl text-white duration-100 hover:text-blue-400 hover:underline"
		>
			Metrônomo
		</h3>
		<button onclick={(none = !none)}>
			<Settings />
		</button>
	</div>
	<div class="flex-1/6">
		<h2 class="mt-4 text-center text-4xl font-thin text-white">{bpm}Bpm {tempo}</h2>
		<div class="w-50 mx-auto mt-3 flex flex-wrap items-center justify-center gap-2">
			{#each nums as num}
				<Tempo {num} tempo={1} />
			{/each}
		</div>
	</div>

	<div>
		<div
			class="roundend mx-auto mb-10 h-96 w-1 bg-blue-700"
			id="pointer"
			style={'animation-duration:' + velocidade/0.5 + 'ms'}
		></div>
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
				onchange={iniciaMetronomo}
				class="w-[50%] border border-gray-700 text-center"
				min="1"
				pattern="\d*"
			/>
			<select
				name="compasso"
				id="compasso"
				bind:value={tempo}
				onchange={calculaTempo}
				class="w-[50%] border border-gray-700 bg-gray-900 text-center"
			>
				<option value="12/8">12/8</option>
				<option value="9/8">9/8</option>
				<option value="7/8">7/8</option>
				<option value="6/8">6/8</option>
				<option value="5/8">5/8</option>
				<option value="3/8">3/8</option>
				<option value="6/4">6/4</option>
				<option value="5/4">5/4</option>
				<option value="4/4">4/4</option>
				<option value="3/4">3/4</option>
				<option value="2/4">2/4</option>
			</select>
		</div>
	</div>
	<div>
		<Player />
	</div>
</section>

<div
	class="fixed inset-0 z-10 flex h-[100dvh] w-[100dvw] items-center justify-center bg-black/30 transition-opacity duration-300 {none
		? 'pointer-events-none opacity-0'
		: 'opacity-100'}"
>
	<div
		class="w-2xl shadow-xs z-10 h-[450px] transform bg-zinc-950 p-1 shadow-blue-950 transition-all duration-300 {none
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

<style>
	#pointer {
		animation: pointer infinite linear;
		transform-origin: 50% 100%;
	}

	@keyframes pointer {
		0% {
			rotate: z 40deg;
		}
		50% {
			rotate: z -40deg;
		}
		100% {
			rotate: z 40deg;
		}
	}
</style>
