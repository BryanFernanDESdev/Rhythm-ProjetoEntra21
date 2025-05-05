<script>
	let { title, href } = $props();
</script>

<div
	class="active:scale-3d h-16 w-[90%] border-solid border-green-400 border-2 rounded-full text-2xl text-white hover:bg-green-400 hover:text-black text-center mx-auto flex justify-center items-center"
>
	<a {href}>{title}</a>
</div>
