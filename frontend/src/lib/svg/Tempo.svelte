<script>
let {num, tempo} = $props()
</script>

<div class={tempo?'tempo-on-focus':'tempo'}>
{num}
</div>