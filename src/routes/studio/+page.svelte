<script>
  import Saos from "saos";
  import O from '../../components/O.svelte'
	

  	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Studio - one inc. | Brand Design Consultancy</title>
</svelte:head>

    <main class="Studio">
      <O />
      <section id="st1">
        <h1 class="uppercase">Studio</h1>
        
        <div class="wrapper">
          <h3 class="p studio-jp">
            { @html data[0].studio_jap }
          </h3>
          <h4 class="p studio-en" lang="en">
            { data[0].studio_eng }
          </h4>
        </div>
        
      </section>

      <section id="st2">
        <h1 class="uppercase">Corporate Info</h1>
        <!--<h2 class="h5">会社情報</h2>-->
        <h3 class="h6 semitrans">Founder / Creative director</h3>
        <h4 class="h4">Kazuki Kaneko</h4>

        <h3 class="h6 semitrans">Address</h3>
        <h4 class="h4">1F JP Noie Ebisunishi, 1-33-6 Ebisunishi <br class="pc">Shibuya, Tokyo 150-0021</h4>

        <h3 class="h6 semitrans">Contact</h3>
        <h4 class="h4">info@one.tokyo.jp</h4>
        
      </section>
    </main>

<style>


#st1 {padding-top: calc(var(--pX) * 30);}
#st2 {margin-top: calc(var(--pX) * 20);}

#st1 .wrapper {width: 50%;}

#st1 h3 {margin-bottom: 2rem;}
#st1 h4 {line-height: 1.8;}


#st2 h1 {margin-bottom: calc(var(--pX) * 10);}
#st2 h3 {margin-bottom: calc(var(--pX) * .5);}
#st2 h4 {margin-bottom: calc(var(--pX) * 5);}

#Studio footer .O {display: none;}


@media screen and (max-width: 480px) {
  
  .Studio .O {
    height: 65vh;
    top: -32.5vh;
    left: 52.5vw;}


  #st1 {padding-top: calc(var(--pX) * 22.5);}
  #st1 h2 {margin: calc(var(--pX) * .5) 0 calc(var(--pX) * 4);}
  #st1 h2, #st2 h2 {opacity: .5;}

  #st1 .wrapper {width: 100%;}
  #st1 .wrapper h3, #st1 .studio-jp p {
    font-size: 1.25rem;
  }

  #st1 .wrapper h4 {margin-top: 2rem;}

  #st2 {margin-top: calc(var(--pX) * 12.5);}
  #st2 h1 {margin-bottom: 2rem;}
  
  #st2 h4 {margin-bottom: calc(var(--pX) * 4.5);}
}
</style>