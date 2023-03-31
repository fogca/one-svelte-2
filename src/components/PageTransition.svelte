<script>
	import { fly } from 'svelte/transition';
	export let pathname = "";
</script>

{#key pathname}
	<div in:fly={{ opacity: 0, duration: 1200, delay: 1200 }}
		 out:fly={{ opacity: 0, duration: 500 }}>
		<slot />
	</div>
{/key}