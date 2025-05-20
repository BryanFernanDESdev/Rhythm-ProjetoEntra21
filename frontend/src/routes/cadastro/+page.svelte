<script>
	import Background from '$lib/components/background.svelte';
	import { goto } from '$app/navigation';
	
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
	
	// Variáveis para cadastro
	let email = '';
	let senha = '';
	let confirmarSenha = '';
	let erro = '';
	let carregando = false;
	
	// Função para cadastrar usuário
	async function cadastrarUsuario() {
		erro = '';
		
		// Validações básicas
		if (!email || !senha || !confirmarSenha) {
			erro = 'Todos os campos são obrigatórios';
			return;
		}
		
		if (senha !== confirmarSenha) {
			erro = 'As senhas não coincidem';
			return;
		}
		
		carregando = true;
		
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/usuarios/cadastro`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, senha })
			});
			
			const data = await response.json();
			
			if (!response.ok) {
				erro = data.mensagem || 'Erro ao cadastrar usuário';
				return;
			}
			
			// Salvar token no localStorage
			localStorage.setItem('token', data.token);
			localStorage.setItem('usuario', JSON.stringify(data.usuario));
			
			// Redirecionar para a página principal
			goto('/');
		} catch (error) {
			console.error('Erro ao cadastrar:', error);
			erro = 'Erro ao conectar com o servidor';
		} finally {
			carregando = false;
		}
	}
	
	function irParaLogin() {
		goto('/login');
	}
</script>

<Background />

<main class="flex h-screen w-screen items-center justify-center">
	<section
		class="w-4xl max-w-screen mx-4 flex h-[600px] max-h-screen rounded border border-gray-900 bg-gray-950 shadow-sm shadow-black"
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
					Cadastro
				</h2>
			</div>
		</div>
		<div
			class="flex-2/4 flex h-full flex-col items-center justify-center gap-4 bg-neutral-950/80 text-white"
		>
			<p class="text-center capitalize text-gray-200">Criar uma conta</p>
			<input
				type="email"
				name="Email"
				id="email"
				placeholder="Email"
				bind:value={email}
				class="w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-blue-950"
			/>

			<input
				type="password"
				name="senha"
				id="senha"
				placeholder="Senha"
				bind:value={senha}
				class="w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-blue-950"
			/>
			<input
				type="password"
				name="senha-repetir"
				id="confirmarSenha"
				placeholder="Repetir senha"
				bind:value={confirmarSenha}
				class="w-[60%] border-b bg-gray-900/20 px-4 py-2 outline-none placeholder:text-lg focus:bg-blue-950"
			/>
			
			{#if erro}
				<p class="text-sm text-red-500">{erro}</p>
			{/if}
			
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
				<button
					class="h-7 w-20 select-none rounded-full bg-green-600 duration-200 hover:scale-110 hover:cursor-pointer hover:bg-green-500 active:bg-green-600 {carregando ? 'opacity-50 cursor-not-allowed' : ''}"
					on:click={cadastrarUsuario}
					disabled={carregando}
				>
					{carregando ? 'Aguarde...' : 'Cadastrar'}
				</button>
				<button
					class="h-7 w-20 select-none rounded-full bg-blue-600 duration-200 hover:scale-110 hover:cursor-pointer hover:bg-blue-500 active:bg-blue-600"
					on:click={irParaLogin}
				>
					Login
				</button>
			</div>
			<p class="text-sm text-gray-300">
				já tem uma conta? <a href="/login" class="text-shadow-2xs text-blue-600 hover:underline"
					>Faça login</a
				>
			</p>
		</div>
	</section>
</main>