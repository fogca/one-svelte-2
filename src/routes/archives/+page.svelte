<script>
  import Saos from "saos";
  import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

  onMount(() => {
    let colc = new Colcade( '.masonry', {
      columns: '.masonry-column',
      items: '.masonry-item'
    });
  });

</script>

<svelte:head>
	<title>Archives - one inc. | Brand Design Consultancy</title>
  <link rel="stylesheet" href="../css/masonry.css">
  <base href="/archives">
  <script src="https://unpkg.com/colcade@0/colcade.js"></script>
</svelte:head>

<main>

  <section id="ar1">
    <h1 class="uppercase">Archives</h1>
    <div class="Archvieswitch">
      <a href="/archives" style="opacity:1;" class="h2">Gallery</a>
      <a href="/archives/texts" class="h2">List</a>
    </div>
    
                                 
    <div class="masonry grid">

      <div class="masonry-column"></div>
      <div class="masonry-column"></div>
      <div class="masonry-column"></div>
      <div class="masonry-column"></div>
      <div class="masonry-column"></div>

      {#if data[0].contents}    
      {#each data[0].contents as content}                                 
      <a href="/archives/{content.id}/" class="masonry-item masonry-1">
        <picture>
          <source srcset="{`${content.thumbnail.url}?fm=avif&q=30&width=580`} 1x, {`${content.thumbnail.url}?fm=avif&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
          <source srcset="{`${content.thumbnail.url}?fm=avif&q=30&width=580`} 1x, {`${content.thumbnail.url}?fm=avif&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
          <source srcset="{`${content.thumbnail.url}?fm=webp&q=30&width=580`} 1x, {`${content.thumbnail.url}?fm=webp&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
          <source srcset="{`${content.thumbnail.url}?fm=webp&q=30&width=580`} 1x, {`${content.thumbnail.url}?fm=webp&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
          <img src={content.thumbnail.url} alt="{content.title}">
        </picture>
      </a>
      {/each}
      {/if}

      {#each data[0].contents as content}                              
      {#if content.fullImageB}   
      <a href="/archives/{content.id}/" class="masonry-item masonry-1">
        <picture>
          <source srcset="{`${content.fullImage.url}?fm=avif&q=30&width=580`} 1x, {`${content.fullImage.url}?fm=avif&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
          <source srcset="{`${content.fullImage.url}?fm=avif&q=30&width=580`} 1x, {`${content.fullImage.url}?fm=avif&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
          <source srcset="{`${content.fullImage.url}?fm=webp&q=30&width=580`} 1x, {`${content.fullImage.url}?fm=webp&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
          <source srcset="{`${content.fullImage.url}?fm=webp&q=30&width=580`} 1x, {`${content.fullImage.url}?fm=webp&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
          <img src={content.fullImage.url} alt="{content.title}">
        </picture>
      </a>
      {/if}
      {/each}

      {#each data[0].contents as content}
      {#if content.fullImageB}                            
      <a href="/archives/{content.id}/" class="masonry-item masonry-1">
        <picture>
          <source srcset="{`${content.fullImageB.url}?fm=avif&q=30&width=580`} 1x, {`${content.fullImageB.url}?fm=avif&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
          <source srcset="{`${content.fullImageB.url}?fm=avif&q=30&width=580`} 1x, {`${content.fullImageB.url}?fm=avif&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
          <source srcset="{`${content.fullImageB.url}?fm=webp&q=30&width=580`} 1x, {`${content.fullImageB.url}?fm=webp&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
          <source srcset="{`${content.fullImageB.url}?fm=webp&q=30&width=580`} 1x, {`${content.fullImageB.url}?fm=webp&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
          <img src={content.fullImageB.url} alt="{content.title}">
        </picture>
      </a>
      {/if}
      {/each}






      
	    {#each data[0].contents as content}
      <a href="/archives/{content.id}/" class="masonry-item masonry-1 repeat">
        {#each content.repeatImg as repeat}
        <picture>
            <source srcset="{`${repeat.images.url}?fm=avif&q=30&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
            <source srcset="{`${repeat.images.url}?fm=avif&q=30&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
            <source srcset="{`${repeat.images.url}?fm=webp&q=30&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=50&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
            <source srcset="{`${repeat.images.url}?fm=webp&q=30&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=50&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
            <img src="{repeat.images.url}" alt="{content.title}">
        </picture>
        {/each}
	    </a>
      {/each}
      




      <!--
      {#each data[0].contents as content}    
      {#if content.images}                             
      <a href="/archives/{content.id}/" class="masonry-item masonry-2">
        <div class="image">{@html content.images}</div>
      </a>
      {/if}
      {/each}

      {#each data[0].contents as content}                                 
      {#if content.images}
      <a href="/archives/{content.id}/" class="masonry-item masonry-3">
        <div class="image">{@html content.images}</div>
      </a>
      {/if}
      {/each}

      {#each data[0].contents as content}                                 
      {#if content.images2}
      <a href="/archives/{content.id}/"  class="masonry-item masonry-4">
        <div class="image">{@html content.images2}</div>
      </a>
      {/if}
      {/each}

      {#each data[0].contents as content}    
      {#if content.images2}                             
      <a href="/archives/{content.id}/" class="masonry-item masonry-5">
        <div class="image">{@html content.images2}</div>
      </a>
      {/if}
      {/each}

    -->

    </div>

  </section>

</main>



<style>

.repeat picture {display: none;}
.repeat picture:nth-of-type(1) {display: block;}



#ar1 {
  padding-bottom: 15vh;
  width: calc(100vw - var(--padding)*1);
  margin-left: 0;
}

.masonry {
  width: calc(100% + 1rem);
  margin-left: -1rem;
  display: flex;
}

.masonry-column {
  width: calc(20% - 1rem);
  margin-left: 1rem;
  float: left;
  flex-grow: 1;
}

.masonry-item {
  width: calc(20% - 1rem);
  width: 18%;
  width: 100%;
}
.masonry-item img {
  margin-bottom: .5rem;
}

@media screen and (max-width: 480px) {

  .masonry {
    width: 100%;
    margin-left: 0;
  }
  
  .masonry-column {
    width: 33.3%;
    margin-left: .5rem;
  }
  .masonry-column:nth-of-type(1) {margin-left: 0;}
  .masonry-column:nth-of-type(4),
  .masonry-column:nth-of-type(5) {display: none;}
  .masonry-item {
    width: 100%;
  }
  .masonry-item img {margin-bottom: 0;}
  
  
  
  #ar1 {
    padding: calc(var(--pX) * 30) 0 15vh;
    width: 100%;
  }
  #ar1 h1 {font-size: 2.4rem;}
}



#ar1 .masonry-item img {
	display: block;
	width: 100%;
  height: 100%;
}

/*
#ar1 .masonry-item:nth-of-type(8) img,
#ar1 .masonry-item:nth-of-type(15) img,
#ar1 .masonry-item:nth-of-type(30) img {aspect-ratio: 3/5;}
*/

#ar1 .container1 .images p img {display: none;}
#ar1 .container1 .images p img:nth-of-type(1) {display: block;}
#ar1 .container2 .images p img {display: none;}
#ar1 .container2 .images p img:nth-of-type(2) {display: block;}
#ar1 .container3 .images p img {display: none;}
#ar1 .container3 .images p img:nth-of-type(3) {display: block;}
#ar1 .container4 .images p img {display: none;}
#ar1 .container4 .images p img:nth-of-type(4) {display: block;}
#ar1 .container5 .images p img {display: none;}
#ar1 .container5 .images p img:nth-of-type(5) {display: block;}









@media screen and (max-width: 480px) {

  #ar1 {padding: 20vh var(--padding) 0;}
}



@media screen and (min-width: 1440px) {

}
@media screen and (min-width: 720px) and (max-width: 1280px) {
  #ar1 {width: 80vw}
}

@media screen and (min-width: 1640px) {


  
  #ar1 {
    width: 100%;
    padding-right: var(--padding);
  }


}

</style>