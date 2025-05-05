<script>
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
		<a onclick={() => (none = !none)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6 cursor-pointer fill-white duration-100 hover:fill-green-400"
			>
				<path
					d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
				/>
			</svg>
		</a>
	</div>
	<h2 class="mt-4 text-center text-4xl font-thin text-white">{bpm}Bpm {tempo}</h2>

	<p onclick={iniciaMetronomo}>{contador}</p>
</div>

<div
	class="absolute top-0 flex h-screen w-screen items-center justify-center bg-zinc-900/60"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-4">
		<h2 class="mt-6 text-center font-bold capitalize text-white">menu</h2>
	</div>
</div>
