<script>
  import Saos from "saos";
	import O from '../components/O.svelte';
	import Arrow from '../components/Arrow.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
	<title>one inc. | Brand Design Consultancy</title>
</svelte:head>

<main>

	<section id="i1">
		<O />
    
    <h1 class="tagline uppercase">{@html data[1].top_tagline }</h1>
		<div class="wrapper">
		  <h2 class="p">{ @html data[1].top_jap }</h2>
		  <h3 class="h5 p">{ data[1].top_eng }</h3>
		</div>

    <div class="links">
      <a href="/studio">
        <h4 class="uppercase">About our studio
        <span><Arrow /></span>
        </h4>
        <h5 class="h6">oneについて</h5>
      </a>
      <a href="/contact">
        <h4 class="uppercase">Contact
        <span><Arrow /></span>
        </h4>
        <h5 class="h6">お問い合わせ</h5>
      </a>
    </div>
    
	</section>

	<section id="i2">
		<h1 class="uppercase">Highlights</h1>
		<h3 class="h5" style="display:none;">プロジェクト</h3>

		{#if data[0].contents}
		<div class="wrapper">
			
			{#each data[0].contents as content}                                 
		  	<a href="/archives/{content.id}/" class="container">
          <Saos animation={"scroll-animation 1.5s .45s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
				  <img src={content.thumbnail.url} alt="{content.title}"><!--<img src="`${content.thumbnail.url}?fm=webp`" alt="{content.title}">-->
				  <h2 class="h4">{ content.title }</h2>
				  <h4 class="h6">{ content.scope }</h4>
          </Saos>
		  	</a>
			{/each}
		</div>
		{/if}

	</section>
  
	<section id="i3">
	
		<div class="wrapper">
		  <h1 class="uppercase">{ data[1].philosophy_title_eng }</h1>
		  <p class="h5">{ data[1].philosophy }</p>
		</div>
		<div class="container">
		  <a href="/studio">
			<h4 class="uppercase">About our studio
			  <span><Arrow /></span>
			</h4>
			<h5 class="h6">oneについて</h5>
		  </a>
  
		  <a href="/contact">
			<h4 class="uppercase">Contact
			  <span><Arrow /></span>
			</h4>
			
			<h5 class="h6">お問い合わせ</h5>
		  </a>
		</div>
	
	</section>
	
</main>

<style>

@keyframes -global-scroll-animation {0% {transform: translateY(1rem);opacity: 0;}100% {transform: translateY(0);opacity: 1;}}

#i1 {
  width: 100%;
  min-height: 100vh;
  padding-left: -10vw;
  position: relative;
}

#i1 .links {
  position: absolute;
  top: auto;
  bottom: 2rem;
}


#i1 h1 {
  line-height: 1.4;
  font-size: 3.2rem;
  padding-top: 25vh;
}

#i1 .wrapper {width: 40%;}
#i1 .wrapper .p {
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
#i1 a {display: block;}  

#i1 .wrapper h3 {
  line-height: 1.6;
  margin-bottom: 8rem;}
#i1 h5 {
  margin-top: .5rem;
  margin-bottom: 4rem;}


#i2 {
  padding-top: calc(var(--pX) * 15);
  padding-right: 10vw;
}
#i2 h3 {margin-top: calc(var(--pX) * 1);}
#i2 .wrapper {margin-top: calc(var(--pX) * 7.5);}
#i2 .wrapper a img {
  width: 100%;
  max-height: 85vh;
  transition: .75s ease-in-out;
}

#i2 .wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
#i2 .wrapper a {
  width: 27.5vw;
  margin-top: calc(var(--pX) * 20);
  overflow: hidden;
}
#i2 .wrapper a:hover img {filter: saturate(0.75) brightness(0.875) contrast(1.05);}
#i2 .wrapper a:nth-of-type(1) {
  width: 90vw;
  margin-top: 0;
  margin-right: -10vw;
}

#i2 .wrapper a:nth-of-type(1) img {width: 90vw;aspect-ratio: 2/1;}

#i2 .wrapper a:nth-of-type(3),
#i2 .wrapper a:nth-of-type(4),
#i2 .wrapper a:nth-of-type(7) {width: 42.5vw;}
#i2 .wrapper h2 {
  font-size: 2.6rem;
  margin-top: calc(var(--pX) * 1.5);}
#i2 .wrapper h4 {margin-top: calc(var(--pX) * .5);}

#i3 {
  background-color: var(--darkGray);
  margin-top: calc(var(--pX) * 20);
  padding-top: calc(var(--pX) * 20);
  padding-bottom: calc(var(--pX) * 17.5);
  padding-right: 10vw;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
#i3 .wrapper {width: 52.5%;}
#i3 * {color: white;}
#i3 h1 {margin-bottom: 3rem;}
#i3 h3 {margin: calc(var(--pX) * 1.5) 0 calc(var(--pX) * 5);}
#i3 .wrapper {margin-right: 12.5vw;}
#i3 .container h2 {margin-top:calc(var(--pX) * 5);}
#i3 .container a {margin-top: 3rem;}


@media screen and (max-width: 480px) {
  
  
  #i1 {
    height: 100vh;
    height: 100dvh;
  }
  #i1 h1 {
    font-size: 2.8rem;
    font-size: 2.4rem;
    line-height: 1.6;
    padding-top: 13.5rem;
  }
  #i1 h1.uppercase {text-transform: initial;}
  #i1 .wrapper {width: 95%;}

  #i1 .wrapper h2 {
    font-size: 1.4rem;
    margin: 1.5rem 0 .5rem;
  }

  #i1 .wrapper h3.p {
    font-size: 1.35rem;
    line-height: 1.8;
    margin: 1rem 0 0.5rem;
}
#i1 h5 {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
}


  #i2 {
    padding-top: calc(var(--pX) * 7.5);
    padding-right: 0;
  }
  #i2 .wrapper {
    margin-top: 3rem;
    justify-content: flex-end;
  }
  #i2 .wrapper a:nth-of-type(1) {
    width: 94vw;
    margin-right: 0;
    overflow: visible;
  }
  #i2 .wrapper a:nth-of-type(1) img {
    width: 100vw;
    aspect-ratio: 3/2;
    margin-left: -6vw;
  }
#i2 .wrapper a {
    margin-top: 6.5rem;
    width: 94vw;
    margin-left: 0;
}
#i2 .wrapper a:nth-of-type(3), #i2 .wrapper a:nth-of-type(4), #i2 .wrapper a:nth-of-type(7) {width: 94vw;}
#i2 .wrapper a:nth-of-type(4) img {aspect-ratio: 1;}
#i2 .wrapper a:nth-of-type(6) img {aspect-ratio: 5/6;}

#i2 .wrapper a img {max-height: 65vh;}
#i2 .wrapper a h2 {font-size: 2.2rem;
margin-top: calc(var(--pX) * 1.5);}

#i2 .wrapper a h4 {
  font-size: 1.6rem;
  opacity: .5;
  margin-top: 0;}
#i2 .wrapper h4 {margin-top: calc(var(--pX) * .5);}

#i3 {
    margin-top: 10rem;
    padding-top: 10rem;
    padding-bottom: calc(var(--pX) * 10);
  }
#i3 .wrapper {
    width: 100%;
    margin-right: 0;
    margin-bottom: calc(var(--pX) * 5);}
}

#i3 .container a {display: block;}
#i3 .container svg path {fill: white;}

@media screen and (min-width: 1800px) {
  #i1 .O {
  top: -20vh;
  left: 67.5vw;
  height: 105vh;
  transform: translate(-50%,-50%);
}
}
	
</style>