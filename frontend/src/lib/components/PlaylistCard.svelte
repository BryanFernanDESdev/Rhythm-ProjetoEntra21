<script>
	import Close from '$lib/svg/Close.svelte';
	import Chevron from '$lib/svg/Chevron.svelte';
	import Elipsis from '$lib/svg/Elipsis.svelte';

	let chevron = $state(false)
	let close = $state(false)

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

	function formataDuracao(duracao){
		const duracaoObj = new Date(duracao)
		return duracaoObj.toLocaleTimeString('pt-br',{
			hour12:false,
			second:'2-digit',
			minute:'numeric',
			hours:false
		})
	}

</script>

<div
	class="h-13 mt-0.5 flex items-center justify-between gap-1 bg-zinc-700 text-white shadow-xs shadow-blue-600/20 {close?'hidden':''}"
>
	<div class="flex h-full w-10 items-center justify-center border-r-2 border-r-zinc-900 text-xl">
		{num}
	</div>
	<div class="flex h-full w-[40%] items-center border-r-2 border-r-zinc-900">
		<img {src} alt="capa do album {album} por {artista}" class="mr-2 size-10" />
		<div class="-my-0.5 flex w-full flex-col justify-between">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-center">
					<img src={artistaUrl} alt="foto do artista {artista}" class="mr-2 size-4 rounded-full" />
					<h5 class="text-2xs font-bold">{artista}</h5>
					<p class="text-xs">- {album}</p>
				</div>
				<div class="mr-2 justify-self-end text-right text-sm text-white/60">
					{formataData(data)}
				</div>
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
		{formataDuracao(duracao)}
	</div>
	<div class="flex h-full w-[13%] items-center justify-center border-r-2 border-r-zinc-900 text-lg">
		{formataData(data2)}
	</div>
	<div class="flex h-full w-[13%] items-center justify-evenly text-lg">
		<button onclick={()=> chevron = !chevron} class={chevron?'rotate-0':'rotate-z-90'}>
			<Chevron />
		</button>
		<button class="size-6" onclick={()=> close = !close}>
			<Close />
		</button>
		<button> 
			<Elipsis />
		</button>
	</div>
</div>
<div class="{chevron?'h-[50vh] shadow-xs shadow-blue-600/20':'h-0'} w-full bg-zinc-700/90 transition-all duration-300 ">

</div>
