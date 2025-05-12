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
		<div class="flex-2/6 h-full bg-gray-900 p-5">
			<h2
				class="text-shadow-lg mt-10 text-center font-sans text-2xl font-semibold text-white hover:underline"
			>
				Cadastro
			</h2>
		</div>
		<div
			class="flex-2/4 flex h-full flex-col items-center justify-center gap-4 bg-neutral-950/80 text-white"
		>
			<p class="capitalize text-gray-200">Criar uma Conta</p>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				class="w-[60%] border-b bg-gray-900/20 px-4 pb-2 pt-3 outline-none placeholder:text-lg focus:bg-gray-900"
			/>
			<input
				type="password"
				name="senha"
				id="senha"
				placeholder="Senha"
				class="w-[60%] border-b bg-gray-900/20 px-4 pb-2 pt-3 outline-none placeholder:text-lg focus:bg-gray-900"
			/>
			<input
				type="password"
				name="senha"
				id="senha"
				placeholder="Repetir Senha"
				class="w-[60%] border-b bg-gray-900/20 px-4 pb-2 pt-3 outline-none placeholder:text-lg focus:bg-gray-900"
			/>
			<div class="mt-3 flex gap-3">
				<button
					class=" rounded-full bg-green-600 hover:cursor-pointer hover:bg-green-500 active:border-green-500 active:bg-green-600 p-1 px-3"
					>Cadastrar</button
				>
			</div>
			<p class="text-sm text-gray-300">
				já possui uma conta? <a href="/Login" class="text-shadow-2xs text-blue-600 hover:underline"
					>Login</a
				>
			</p>
		</div>
	</section>
</main>
