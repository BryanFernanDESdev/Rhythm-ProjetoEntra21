<script>
let {num, focus, tempo} = $props()

let highlighted = $state()

if(tempo){
highlighted = 'tempo-hidden'
}else{
highlighted = 'tempo'
}
</script>

<div class="{focus?'tempo-on-focus':highlighted} duration-50 cursor-pointer active:scale-95 text-center" onclick={()=>tempo=!tempo}>
{num}
</div>