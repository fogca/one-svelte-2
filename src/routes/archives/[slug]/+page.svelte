<script>
	import Saos from "saos";

	import { onMount } from 'svelte';

	onMount(async () => {
	  window.setTimeout(function(){
		//FONTPLUS.start();
		FONTPLUS.reload(false)
	  }, 100);
	});


	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data[0].title} - one inc. | Brand Design Consultancy</title>
	<link rel="stylesheet" href="../../css/archive.css">

	<meta name="description" content="">
  	<meta property="og:title" content="{data[0].title} | one inc.">
  	<meta property="og:description" content="{data[0].scope}">
  	<meta property="og:site_name" content="one inc.">
  	<meta property="og:url" content="/archives/{data[0].id}">
  	<meta property="og:image" content="{data[0].thumbnail.url}">
	
</svelte:head>
<article>

	<section id="s1">
		
		<h1 class="h2" lang="en">{data[0].title}</h1>
		<h2 class="h5 semitrans" lang="en">{ data[0].scope }</h2>
		<p class="h5 body">{@html data[0].body}</p>
		<img src={data[0].thumbnail.url} class="thumbnail" alt="{data[0].title}">
		
		
		{#if data[0].repeatImg}
		{#each data[0].repeatImg as repeat}
        <picture>
            <source srcset="{`${repeat.images.url}?fm=avif&q=60&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=75&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
            <source srcset="{`${repeat.images.url}?fm=avif&q=60&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=75&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
            <source srcset="{`${repeat.images.url}?fm=webp&q=60&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=75&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
            <source srcset="{`${repeat.images.url}?fm=webp&q=60&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=75&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
            <img src={repeat.images.url} alt="{data[0].title}" class="repeat">
        </picture>
		{/each}
        {/if}

		<div class="images">{@html data[0].image}</div>
		
		{#if data[0].fullImage} 
		<img src={data[0].fullImage.url} class="fullImage" alt="{data[0].title}">
		{/if}

		{#if data[0].repeatImg2}
		{#each data[0].repeatImg2 as repeat}
        <picture>
            <source srcset="{`${repeat.images.url}?fm=avif&q=60&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=75&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
            <source srcset="{`${repeat.images.url}?fm=avif&q=60&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=75&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
            <source srcset="{`${repeat.images.url}?fm=webp&q=60&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=75&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
            <source srcset="{`${repeat.images.url}?fm=webp&q=60&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=75&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
            <img src={repeat.images.url} alt="{data[0].title}" class="repeat">
        </picture>
		{/each}
        {/if}
		
		<div class="images">{@html data[0].imagesB}</div>
		
		{#if data[0].embed} 
		<div class="embed">{@html data[0].embed}</div>
		{/if}

		{#if data[0].fullImageB} 
		<img src={data[0].fullImageB.url} class="fullImage" alt="{data[0].title}">
		{/if}
		
		<h6 class="h4 credit" lang="en">{@html data[0].credit}</h6>
		
		{#if data[0].link} 
		<a href="{data[0].link}" target="_blank" class="h5 link" lang="en">Official Site</a>​
		{/if}

	</section>


	
	<section id="s2">
		<h1 class="uppercase">More Archives</h1>
		<div class="wrapper">          
			{#if data[1].contents}	
			{#each data[1].contents as content}                                 
		  	<a href="/archives/{content.id}/" data-sveltekit-prefetch class="container" data-sal="fade" style="--sal-duration: 2s;">
				<img src={content.thumbnail.url} alt="{content.title}">
				<h2 class="h4">{ content.title }</h2>
		  	</a>
			{/each}
			{/if}
		</div>
	</section>

	<!--
		<div class="wrapper">

			<a v-if="prev" :to="`/archives/${prev.id}`" rel="prev">
				<img :src="prev.thumbnail.url" :alt="prev.title">
				<h2 class="h4">{{ prev.title }}</h2>
			</a>
			<a v-else :to="`/archives/${next.id}`" rel="next">
				<img :src="next.thumbnail.url" :alt="next.title">
				<h2 class="h4">{{ next.title }}</h2>
			</a>

			<a v-if="prev2" :to="`/archives/${prev2.id}`" rel="prev">
				<img :src="prev2.thumbnail.url" :alt="prev2.title">
				<h2 class="h4">{{ prev2.title }}</h2>
			</a>
			<a v-else :to="`/archives/${next2.id}`" rel="next">
				<img :src="next2.thumbnail.url" :alt="next2.title">
				<h2 class="h4">{{ next2.title }}</h2>
			</a>

			<a v-if="prev3" :to="`/archives/${prev3.id}`" rel="prev">
				<img :src="prev3.thumbnail.url" :alt="prev3.title">
				<h2 class="h4">{{ prev3.title }}</h2>
			</a>
			<a v-else :to="`/archives/${next3.id}`" rel="next">
				<img :src="next3.thumbnail.url" :alt="next3.title">
				<h2 class="h4">{{ next3.title }}</h2>
			</a>
		</div>
	</section>
	-->

</article>

<style>

	.repeat {width: 100%;}

#s1 {
    width: 90%;
    padding-top: calc(var(--pX) * 30);
    padding-top: 25vh;
}

#s1 h1 {
    font-size: 2.2rem;
    margin: 0 0 .5rem;
}
#s1 h2 {
	font-size: 1.4rem;
	margin: 0.5rem 0 4rem;
}


	
#s2 {margin-top: 22.5rem;}

#s2 .wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
	justify-content: space-between;
    margin-top: 5rem;}
#s2 a {width: 22.5%;}
#s2 a:nth-of-type(3) {margin-right: 0;}
#s2 img {width: 100%;}
#s2 a h2 {
	margin-top: .5rem;
	font-size: 2rem;}



/*
#s2 .ytp-gradient-top, #s2 .ytp-chrome-top, #s2 .ytp-show-cards-title {display: none !important;}

.embedly-embed {width: 100%; background-color: #dedede;}
.embedly-embed * {display: none; background-color: #dedede;}
.html5-video-player:not(.ytp-transparent), .html5-video-player.unstarted-mode, .html5-video-player.ad-showing, .html5-video-player.ended-mode, .html5-video-player.ytp-fullscreen {
    background-color: #dedede;
}
.embedly-embed video {aspect-ratio: 3/2;}
.Slug iframe {pointer-events: all;}

.Slug .embedly-embed .ytp-chrome-top, .Slug .ytp-gradient-top, 
.Slug .embedly-embed .ytp-show-cards-title, .Slug .embedly-embed .ytp-chrome-top, .Slug .ytp-title,
.Slug .html5-video-player a, .ytp-title-text {display: none !important;z-index: 0 !important;}
.Slug .ytp-large-play-button, .Slug .ytp-button {opacity:0;}
.html5-video-container video, .video-stream, .html5-main-video {aspect-ratio: 3/2;}



.Slug .embed .play-bar {display: none;}
*/



@media screen and (max-width: 480px) {
    #s1 {
        width: 100%;
        padding-top: var(--sectionTop);
    }
    #s1 h1 {
		font-size: 2.15rem;
		margin-top: 0;
	}
    #s1 h2 {
		width: 90%;
		margin-bottom: calc(var(--pX) * 3.5);
	}
    #s1 p {
        letter-spacing: -0.15px;
        text-align: justify;
	}

	#s1 .credit {margin-top: 2.5rem;}

    #s2 {    
        margin-top: 12.5rem;
        margin-bottom: 0;}

    #s2 a {
        width: 100%;
        margin-right: 0;
        margin-bottom: 7.5rem;
    }

}
</style>