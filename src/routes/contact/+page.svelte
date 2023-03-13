<script>
  import O from '../../components/O.svelte';
  import Saos from "saos";
	
</script>

<svelte:head>
	<title>Contact - one inc. | Brand Design Consultancy</title>
</svelte:head>

<main>
  <section id="c1">
    <div>
      <h1 class="uppercase">Contact</h1>
      
      <h4 class="h6 semitrans uppercase">Email</h4>
      <a href="mailto:info@one.tokyo.jp">
        <h3 class="h4">info&#64;one.tokyo.jp</h3>
      </a>
      

      <h4 class="h6 semitrans uppercase">Address</h4>
      <h3 class="h4">1F JP Noie Ebisunishi, 1-33-6 Ebisunishi <br>Shibuya, Tokyo 150-0021</h3>
    </div>
  </section>
</main>

<style>
  
  
  #c1 {
    padding-top: calc(var(--pX) * 30);
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  #c1 h1 {margin-bottom: calc(var(--pX) * 10);}
  #c1 h3 {margin-bottom: calc(var(--pX) * 5);}
  #c1 h4 {margin-bottom: calc(var(--pX) * .5);}
  
  

  
  
  
  
  @media screen and (max-width: 480px) {
    #c1 {padding-top: calc(var(--pX) * 22.5);}
    #c1 h5 {margin-bottom: calc(var(--pX) * 6);}
    #c1 h2 {margin-bottom: calc(var(--pX) * 4.5);}
  
    #c1 .O {
      height: 65vh;
      top: -32.5vh;
      left: 52.5vw;}
  }
</style>