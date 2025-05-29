<script>
	let { num, tempo } = $props();

	let time = $state(tempo);
	let tempoClass = $state('tempo');
	function getClass() {
		if (time === 1) return (tempoClass = 'tempo');
		if (time === 2) return (tempoClass = 'tempo-hidden');
		if (time === 3) return (tempoClass = 'tempo-high');
	}
	getClass();
</script>

<button
	onclick={() => {
		time + 1;
		if (time >= 4) time = 1;
		getClass();
	}}
>
	<div class="duration-50 cursor-pointer text-center active:scale-95 {tempoClass}">
		{num}
	</div>
</button>
