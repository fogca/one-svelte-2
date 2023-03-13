<script>
	import { fly } from 'svelte/transition';
	export let pathname = "";
</script>

{#key pathname}
	<div in:fly={{ y: 3, opacity: 0, duration: 1500, delay: 1500 }}
		 out:fly={{ y: -3, opacity: 0, duration: 1500 }}>
		<slot />
	</div>
{/key}