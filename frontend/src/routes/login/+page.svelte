<script>
	import Background from '$lib/components/background.svelte';
</script>

<Background />

<div
	class="bg-linear-to-tr fixed bottom-0 left-0 right-0 top-0 -z-10 from-slate-900 to-gray-950"
></div>

<main class="flex h-screen w-screen items-center justify-center">
	<section
		class="w-4xl flex h-[600px] max-h-[75dvh] max-w-5xl rounded bg-gray-950 shadow-sm shadow-black"
	>
		<div
			class="flex-2/6 h-full bg-gray-900 bg-[url(https://www.festivalpro.com/articles/1568.png)] bg-cover bg-center"
		>
			<div class="relative bottom-0 left-0 right-0 top-0 h-full w-full bg-gray-950/70">
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
			<p class="capitalize text-gray-200">Entrar com uma conta</p>
			<input
				type="text"
				name="usuario"
				id="usuario"
				placeholder="Usuario"
				class="w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-gray-900"
			/>
			<input
				type="password"
				name="senha"
				id="senha"
				placeholder="Senha"
				class="w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-gray-900"
			/>

			<div class="mt-3 flex gap-3">
				<a href="/Login"
					><img
						class="size-5"
						src="https://cdn-icons-png.flaticon.com/512/3669/3669986.png"
						alt="spotify logo"
					/></a
				>
				<a href="/Login"
					><img
						class="size-5"
						src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
						alt="google logo"
					/></a
				>
				<a href="/Login"
					><img
						class="size-5"
						src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png "
						alt="facebook logo"
					/></a
				>
			</div>
			<div class="flex items-center justify-center gap-5">
				<button
					class="h-7 w-20 rounded-full bg-green-600 hover:cursor-pointer hover:bg-green-500 active:border-green-500 active:bg-green-600"
					>Login</button
				>
				<button
					class="h-7 w-20 rounded-full bg-blue-600 hover:cursor-pointer hover:bg-blue-500 active:bg-blue-600"
					href="/cadastro">Cadastrar</button
				>
			</div>
			<p class="text-sm text-gray-300">
				não lembrar a senha? <a href="/Login" class="text-shadow-2xs text-blue-600 hover:underline"
					>Redefinir senha</a
				>
			</p>
		</div>
	</section>
</main>
