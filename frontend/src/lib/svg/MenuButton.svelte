<script>
	let { title, href } = $props();
</script>

<div
	class="active:scale-3d mx-auto flex h-16 w-[90%] items-center justify-center rounded-full border-2 border-solid border-blue-950 text-center text-xl text-white hover:bg-blue-900 hover:scale-105 duration-150 active:bg-blue-800 cursor-pointer active:scale-95 active::font-bold"
>
	<a {href}>{title}</a>
</div>
