<script>
	let {
		num,
		musica,
		bpm,
		tom,
		afinacao,
		duracao,
		data,
		dataAlbum,
		src,
		album,
		artista,
		artistaUrl
	} = $props();
</script>

<div class="h-13 mt-0.5 flex select-none items-center justify-between gap-1 bg-zinc-700 text-white">
	<div class="flex h-full w-10 items-center justify-center border-r-2 border-r-zinc-900 text-xl">
		{num}
	</div>
	<div class="flex h-full w-[40%] items-center border-r-2 border-r-zinc-900">
		<img {src} alt="capa do album {album} por {artista}" class="mr-2 size-10" />
		<div class="-my-0.5 flex flex-col justify-center">
			<div class="flex justify-between text-sm">
				<div class="-mb-1.5 mt-1.5 flex justify-between">
					<img src={artistaUrl} alt="foto do artista {artista}" class="mr-2 size-4 rounded-full" />
					{artista} - {album}
					<div class="ml-7 text-sm text-white/60">{data}</div>
				</div>
			</div>
			<div class="font text-xl">{musica}</div>
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
		{data}
	</div>
	<div class="flex h-full w-[13%] items-center justify-center text-lg"></div>
</div>
