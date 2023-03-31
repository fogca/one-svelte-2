<script>
	import Saos from "saos";

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
  <title>Archives(Texts) - one inc. | Brand Design Consultancy</title>
</svelte:head>


<main>

  <section id="tx1">
    <h1 class="uppercase" lang="en">Archives</h1>
    <div class="Archvieswitch">
      <a href="/archives" lang="en">Gallery</a>
      <a href="/archives/texts" style="opacity:1;" lang="en">List</a>
    </div>
    <div class="wrapper">

      {#if data[0].contents}                                 
      {#each data[0].contents as content}                                 
      <a href="/archives/{content.id}/" lang="en">
        <hr>
        <div class="container">
          <time class="time" lang="en">{content.year}</time>
          <h2 class="h4" lang="en">{ content.title }</h2>
          <h3 class="h5" lang="en">{ content.scope }</h3>
          <!--<Arrow />-->
        </div> 
      </a>
      {/each}
      {/if}
      <hr>
    </div>
</section>

</main>

<style>

#tx1 {
    padding-top: calc(var(--pX) * 30);
    padding-right: 10vw;}

#tx1 .wrapper {
  width: 100%;
  margin-top: 0;
}

#tx1 .wrapper a {width: 100%;}
#tx1 .wrapper a:hover {opacity: .5;}

/*
#tx1 .wrapper a .title h2 {width: fit-content;}
#tx1 .wrapper a .title h2::before {
    font-size: 2rem;
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: black;
    position: absolute;
    transition: .5s ease-in-out;
}
#tx1 .wrapper a:hover .title h2::before {
    width: 100%;
}
*/

#tx1 .wrapper .container {
    display: flex;
    align-items: center;
    padding: 3rem 1rem 2.8rem;
    padding: 2.8rem .5rem 2.5rem;
    padding-right: 2rem;
}

#tx1 .wrapper .container .time {
  font-size: 2rem;
    width: 20%;
    opacity: .5;
}

#tx1 .wrapper .container h2 {width: 35%;}
#tx1 .wrapper .container h3 {
  font-size: 1.8rem;
  width: 50%;
  padding-right: 3rem;
  white-space: nowrap;
    overflow: hidden;
}



#tx1 .wrapper hr {
    width: calc(100% + 2rem);
    height: 0.5px;
    opacity: .75;
    margin-left: -2rem;

    height: 0;
    border: 0.25px solid black;
    opacity: .3;
}

#tx1 .Arrow {
    margin-left: auto;
    margin-right: 1rem;
    transform: scale(1.25);
}



@media screen and (max-width: 480px) {

  

    #tx1 {padding-top: 20vh;
    padding-right: 5vw;}

    #tx1 .wrapper {margin-top: 0;}
    #tx1 .wrapper .container {
        flex-direction: column;
        align-items: flex-start;
        padding: 1.6rem 0.5rem 1.4rem;
    }
    #tx1 .wrapper hr {
    width: 100vw;
    margin-left: -5vw;
    }
    #tx1 .wrapper a {width: 97.5%;}
    #tx1 .wrapper .container .time {font-size: 1.2rem;}
    #tx1 .wrapper .container h2 {
      font-size: 2rem;
      width: 92.5%;
      margin: 0.6rem 0 0.5rem;
      margin-left: -1px;
    }
    #tx1 .wrapper .container h3 {
      width: 100%;
      font-size: 1.25rem;
      opacity: .5;
    }
    
    #tx1 .wrapper .container {position: relative;}
    #tx1 .wrapper .container .Arrow {
        position: absolute;
        top: 50%;
        right: 0;
        margin-right: 0;
    }


}
</style>