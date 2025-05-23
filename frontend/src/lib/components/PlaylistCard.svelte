<script>
	let {
		num,
		musica,
		bpm,
		tom,
		afinacao,
		duracao,
		data,
		data2,
		dataAlbum,
		src,
		album,
		artista,
		artistaUrl
	} = $props();

	function formataData(data) {
		const dataObj = new Date(data);
		return dataObj.toLocaleDateString('pt-BR', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		});
	}

	function formataMinuto(hora) {
		const dataObj = new Date(hora);
		return dataObj.toLocaleTimeString({});
	}

	function formatarTempoMMSS(tempoEmSegundos) {
		const segundos = Math.floor(Number(tempoEmSegundos)) || 0;
		const minutos = Math.floor(segundos / 60);
		const segundosRestantes = segundos % 60;
		return `${minutos}:${segundosRestantes.toString().padStart(2, '0')}`;
	}
</script>

<div
	class="h-13 mt-0.5 flex select-none items-center justify-between gap-1 bg-zinc-700 text-white shadow-sm shadow-blue-600/20"
>
	<div class="flex h-full w-10 items-center justify-center border-r-2 border-r-zinc-900 text-xl">
		{num}
	</div>
	<div class="flex h-full w-[40%] items-center border-r-2 border-r-zinc-900">
		<img {src} alt="capa do album {album} por {artista}" class="mr-2 size-10" />
		<div class="-my-0.5 flex flex-col justify-between w-full">
			<div class="flex items-center justify-between">
				<div class="flex justify-center items-center">
					<img src={artistaUrl} alt="foto do artista {artista}" class="mr-2 size-4 rounded-full" />
					<h5 class="text-2xs font-bold">{artista} </h5>
					<p class="text-xs">- {album}</p>
				</div>
				<div class="text-right text-sm text-white/60 justify-self-end mr-2">{formataData(data)}</div>
			</div>
			<div class="font-sans text-xl font-bold">{musica}</div>
		</div>
	</div>
	<div
		class="flex h-full w-[7.5%] items-center justify-center border-r-2 border-r-zinc-900 text-lg"
	>
		{bpm}
	</div>
	<div
		class="flex h-full w-[7.5%] items-center justify-center border-r-2 border-r-zinc-900 text-lg"
	>
		{tom}
	</div>
	<div class="flex h-full w-[10%] items-center justify-center border-r-2 border-r-zinc-900 text-lg">
		{afinacao}
	</div>
	<div
		class="flex h-full w-[7.5%] items-center justify-center border-r-2 border-r-zinc-900 text-lg"
	>
		{duracao}
	</div>
	<div class="flex h-full w-[13%] items-center justify-center border-r-2 border-r-zinc-900 text-lg">
		{formataData(data2)}
	</div>
	<div class="flex h-full w-[13%] items-center justify-center text-lg"></div>
</div>
