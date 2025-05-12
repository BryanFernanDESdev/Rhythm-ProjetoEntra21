<script>
    import Nav from '$lib/components/nav.svelte'
    import Background from '$lib/components/background.svelte'
	import Metronome from '$lib/components/metronome.svelte';
	import Playlist from '$lib/components/playlist.svelte';
</script>

<Nav />
<Background />

<main class="flex max-w-screen max-h-screen h-screen w-screen pt-10">
    <Playlist />
    <Metronome />
</main>