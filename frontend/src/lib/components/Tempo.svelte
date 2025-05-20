<script>
	let { num, focus, tempo } = $props();
</script>

<button onclick={() => (tempo = !tempo)}>
	<div
		class="duration-50 cursor-pointer text-center active:scale-95 {focus
			? 'tempo-on-focus'
			: 'tempo'} {tempo ? 'tempo-hidden' : ''}"
	>
		{num}
	</div>
</button>
