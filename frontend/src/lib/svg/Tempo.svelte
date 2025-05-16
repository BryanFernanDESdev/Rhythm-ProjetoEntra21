<script>
let {num, tempo} = $props()
</script>

<div class="{tempo?'tempo-on-focus':'tempo'} hover:scale-110 duration-150 cursor-pointer active:scale-100 text-center">
{num}
</div>