<script>
	import Background from '$lib/components/background.svelte';
	let src = [
		'https://www.festivalpro.com/articles/1568.png',
		'https://guitarglissando.com/wp-content/uploads/2022/11/elecback-e1667796666445.jpg',
		'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/04/5a78f4c-shows_internacionais.jpg',
		'https://tse4.mm.bing.net/th/id/OIP.9p6SQjpCbKT0REfObS1WQwHaEo?cb=iwc2&w=1600&h=1000&rs=1&pid=ImgDetMain'
	];
	let num = 0;
	setInterval(() => {
		if (num === src.length - 1) {
			return (num = 0);
		}
		num++;
	}, 10000);
</script>

<Background />

<main class="flex h-screen w-screen items-center justify-center">
	<section
		class="w-4xl max-w-screen mx-4 flex h-[600px] max-h-screen rounded border border-gray-900 bg-gray-950 shado"
	>
		<div
			rel="preload"
			as="img"
			class="flex-2/6 min-sm:block hidden h-full bg-gray-900 bg-cover bg-center"
			style="background-image: url({src[num]});"
		>
			<div
				class="relative bottom-0 left-0 right-0 top-0 h-full w-full bg-gray-950/50 transition-colors duration-200 hover:bg-gray-950/30"
			>
				<h2
					class="text-shadow-lg pt-10 text-center font-sans text-2xl font-semibold text-white hover:underline"
				>
					Login
				</h2>
			</div>
		</div>
		<div
			class="flex-2/4 flex h-full flex-col items-center justify-center gap-4 bg-neutral-950/80 text-white"
		>
			<p class="text-center capitalize text-gray-200">Entrar com uma conta</p>
			<input
				type="text"
				name="usuario"
				id="usuario"
				placeholder="Usuario"
				class="w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-blue-950"
			/>

			<input
				type="password"
				name="senha"
				id="senha"
				placeholder="Senha"
				class=": w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-blue-950"
			/>
			<div class="mt-1 flex gap-3">
				<a href="/Login"
					><img
						class="size-5 select-none duration-200 hover:scale-125"
						src="https://cdn-icons-png.flaticon.com/512/3669/3669986.png"
						alt="spotify logo"
					/></a
				>
				<a href="/Login"
					><img
						class="size-5 select-none duration-200 hover:scale-125"
						src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
						alt="google logo"
					/></a
				>
				<a href="/Login"
					><img
						class="size-5 select-none duration-200 hover:scale-125"
						src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png "
						alt="facebook logo"
					/></a
				>
			</div>
			<div class="flex items-center justify-center gap-5">
				<a href="/">
					<button
						class="h-7 w-20 select-none rounded-full bg-green-600 duration-200 hover:scale-110 hover:cursor-pointer hover:bg-green-500 active:border-green-500 active:bg-green-600"
						>Login</button
					>
				</a>
				<a href="/cadastro">
					<button
						class="h-7 w-20 select-none rounded-full bg-blue-600 duration-200 hover:scale-110 hover:cursor-pointer hover:bg-blue-500 active:bg-blue-600"
						href="/cadastro">Cadastrar</button
					>
				</a>
			</div>
			<p class="text-sm text-gray-300">
				não lembra a senha? <a href="/login" class="text-shadow-2xs text-blue-600 hover:underline"
					>Redefinir senha</a
				>
			</p>
		</div>
	</section>
</main>
