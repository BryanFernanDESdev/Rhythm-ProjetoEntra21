<script>
	let { title, href } = $props();
</script>

<div
	class="active:scale-3d mx-auto flex h-16 w-[90%] items-center justify-center rounded-full border-2 border-solid border-green-400 text-center text-2xl text-white hover:bg-green-400 hover:text-black"
>
	<a {href}>{title}</a>
</div>
