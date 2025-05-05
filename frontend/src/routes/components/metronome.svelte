<script>
	import Settings from './Settings.svelte';

	let none = $state(true);
	let bpm = $state(120);
	let tempo = $state('4/4');
	let contador = $state(0);

	function calculaVelocidade(bpm) {
		return (60 / bpm) * 1000;
	}

	let metronome = () => {
		setInterval(() => {
			contador++;
			if (contador > 6) contador = 1;
			console.log(contador);
		}, calculaVelocidade(bpm));
	};

	function iniciaMetronomo() {
		clearInterval(metronome);
		return metronome();
	}
</script>

<div class="w-4xl m-1 mb-0 h-[99%] rounded bg-zinc-950 p-4 shadow shadow-neutral-950">
	<div class="flex">
		<h3
			class="mx-auto select-none text-center text-xl text-white duration-100 hover:text-green-400 hover:underline"
		>
			Metrônomo
		</h3>
		<button onclick={(none = !none)}>
			<Settings />
		</button>
	</div>
	<h2 class="mt-4 text-center text-4xl font-thin text-white">{bpm}Bpm {tempo}</h2>

	<button onclick={iniciaMetronomo}>{contador}</button>
</div>

<div
	class="absolute top-0 flex h-screen w-screen items-center justify-center bg-zinc-900/60"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-4">
		<h2 class="mt-6 text-center font-bold capitalize text-white">menu</h2>
	</div>
</div>
