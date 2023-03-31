<script>
  //import sal from 'sal.js';
	import { page } from '$app/stores';
  import PageTransition from '../components/PageTransition.svelte';
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import { onMount } from 'svelte';

  onMount(async () => {
    window.setTimeout(function(){
      //FONTPLUS.start();
      FONTPLUS.reload(false)
    }, 100);
  });


	/** @type {import('./$types').LayoutData} */
	export let data;
  $: currentRoute = $page.url.pathname; 
</script>

<svelte:head>
  <link rel="stylesheet" href="../css/base.css?var=1.14">
  <link rel="stylesheet" href="../css/main.css?var=1.13">
  <link rel="stylesheet" href="../css/prerendering.css?var=1.13">
  <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?A2b35yD5mnk%3D&box=qnyUbRZ0KZQ%3D&aa=1&ab=2"></script><!--one fontplus-->
  <script src="https://unpkg.com/colcade@0/colcade.js"></script>
</svelte:head>

<div 
  class:Index={currentRoute === "/"} 
  class:Career={currentRoute === "/career"} 
  class:Contact={currentRoute === "/contact"}
  class:Archives={currentRoute === "/archives"}
>

<!-- 2. Pass the `url` prop to the `PageTransition` component, causing it to re-render when the page changes -->
<PageTransition pathname={data.pathname}>
  <Header></Header>
    <slot />
  <Footer></Footer>
</PageTransition>  

</div>
