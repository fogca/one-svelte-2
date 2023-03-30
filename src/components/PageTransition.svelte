<script>
	import { fly } from 'svelte/transition';
	export let pathname = "";
</script>

{#key pathname}
	<div in:fly={{ opacity: 0, duration: 1500, delay: 1000 }}
		 out:fly={{ opacity: 0, duration: 800 }}>
		<slot />
	</div>
{/key}