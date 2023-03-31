<script>
  //import sal from 'sal.js';
	import { page } from '$app/stores';
  import PageTransition from '../components/PageTransition.svelte';
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

	/** @type {import('./$types').LayoutData} */
	export let data;

  $: currentRoute = $page.url.pathname; 
</script>

<svelte:head>
  <link rel="stylesheet" href="../css/base.css?var=1.13">
  <link rel="stylesheet" href="../css/main.css?var=1.13">
  <link rel="stylesheet" href="../css/prerendering.css?var=1.13">
  <link rel="stylesheet" href="https://use.typekit.net/frp6udl.css">
  <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=Bgw26CBfLFk%3D&aa=1&ab=2"></script>
  <script src="https://unpkg.com/colcade@0/colcade.js"></script>
  <script>
    (function(d) {
      var config = {
        kitId: 'rlj3snt',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  </script>
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
