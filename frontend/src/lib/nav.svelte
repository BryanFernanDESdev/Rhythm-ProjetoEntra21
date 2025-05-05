<script>
    import Button from '$lib/menu-Button.svelte'
	let none = $state(true);
</script>

<header class="fixed left-0 right-0 top-0 z-20 min-h-10 bg-zinc-950">
	<nav class="flex items-center justify-between px-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="size-10 fill-green-400 hover:cursor-pointer"
			onclick={() => (none = !none)}
		>
			<path
				fill-rule="evenodd"
				d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
				clip-rule="evenodd"
			/>
		</svg>

		<div class="flex items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="border-1 size-7 w-10 cursor-pointer rounded-l-full border-zinc-600 bg-zinc-800 stroke-white p-1 hover:bg-zinc-700"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>

			<input
				type="search"
				class="border-1 in-focus-within:outline-solid max-h-7 w-96 rounded-r-full border-zinc-600 bg-zinc-800 py-1 pl-2 font-semibold text-gray-100 outline-none outline-1 outline-green-100 selection:bg-green-400 selection:text-black hover:bg-zinc-700 active:bg-zinc-800"
				placeholder="Qual música você deseja tocar?"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="border-1 rounded-4xl ml-1 size-8 border-zinc-600 bg-zinc-800 fill-amber-50 p-2 hover:cursor-pointer hover:bg-zinc-700"
			>
				<path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
				<path
					d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z"
				/>
			</svg>
		</div>

		<svg
			width="102"
			height="121"
			viewBox="0 0 102 121"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="fill size-7 hover:cursor-pointer"
		>
			<rect x="0.768188" y="20.7143" width="100.54" height="100.286" rx="50" fill="#1E1E1E" />
			<circle cx="51.2498" cy="70.8572" r="43.4571" fill="#0A0A0A" />
			<circle cx="50.911" cy="70.8572" r="20.0571" fill="#1E1E1E" />
			<circle cx="51.2497" cy="70.8571" r="3.34286" fill="white" fill-opacity="0.5" />
			<g filter="url(#filter0_d_205_187)">
				<path
					d="M86.3497 4V37.4286L76.3212 64.1714"
					stroke="#1E1E1E"
					stroke-width="8"
					stroke-linecap="round"
				/>
			</g>
			<path
				d="M42.6336 97.8912C42.3405 98.8485 41.3244 99.3922 40.3864 99.042C36.4988 97.5903 32.947 95.3474 29.9595 92.4484C26.9719 89.5493 24.6233 86.0666 23.0554 82.2243C22.6771 81.2973 23.19 80.2654 24.1381 79.9436V79.9436C25.0862 79.6218 26.1098 80.1325 26.4957 81.0564C27.874 84.3557 29.9093 87.3476 32.4844 89.8464C35.0595 92.3451 38.1112 94.2896 41.4504 95.568C42.3855 95.926 42.9267 96.9338 42.6336 97.8912V97.8912Z"
				fill="white"
				fill-opacity="0.5"
			/>
			<defs>
				<filter
					id="filter0_d_205_187"
					x="71.3201"
					y="0"
					width="20.0297"
					height="73.1725"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="0.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_205_187" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_205_187"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	</nav>
</header>

<div
	class="absolute flex h-screen w-screen items-center justify-center bg-zinc-900/60"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-4">
		<h2 class="text-center text-white capitalize font-bold mt-6">menu</h2>

        <div class="flex flex-col mt-5 gap-8">
<Button 
title='Playlists'
href='/'
/>
<Button 
title='Documentação'
href='/'
/>
<Button 
title='FAQ'
href='/'
/>
<Button 
title='Saiba Mais'
href='/'
/>
        </div>
	</div>
</div>
