<script>
	let { num,musica, bpm, tom, afinacao, duracao, data, dataAlbum , src , album, artista, artistaUrl } = $props();

</script>

<div class="mt-0.5 h-13 flex items-center justify-between gap-1 bg-zinc-700 select-none text-white">
	<div class="h-full w-10 border-r-2 border-r-zinc-900 flex justify-center items-center text-xl">{num}</div>
	<div class="h-full w-[40%] border-r-2 border-r-zinc-900 flex items-center">
        <img {src} alt="capa do album {album} por {artista}" class="size-10 mr-2">
        <div class="flex justify-center -my-0.5 flex-col">
            <div class="text-sm justify-between flex">
                <div class="flex justify-between mt-1.5 -mb-1.5">
                    <img src={artistaUrl} alt="foto do artista {artista}" class="rounded-full size-4 mr-2">
                    {artista} - {album}
                    <div class="ml-7 text-sm text-white/60">{data}</div>
                </div>
            </div>
            <div class="text-xl font">{musica}</div>
        </div>


    </div>
	<div class="h-full w-[7.5%] border-r-2 border-r-zinc-900 flex justify-center items-center text-lg">{bpm}</div>
	<div class="h-full w-[7.5%] border-r-2 border-r-zinc-900 flex justify-center items-center text-lg">{tom}</div>
	<div class="h-full w-[10%] border-r-2 border-r-zinc-900 flex justify-center items-center text-lg">{afinacao}</div>
	<div class="h-full w-[7.5%] border-r-2 border-r-zinc-900 flex justify-center items-center text-lg">{duracao}</div>
	<div class="h-full w-[13%] border-r-2 border-r-zinc-900 flex justify-center items-center text-lg">{data}</div>
	<div class="h-full w-[13%] flex justify-center items-center text-lg"></div>
</div>
