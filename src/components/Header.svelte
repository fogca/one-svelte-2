<script>
    import Saos from "saos";
    //import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import Menu from './Menu.svelte';
    import Logo from './Logo.svelte';

    let clicked = false;
	  let isExpanded = false
	  function clickHandler() {
		  isExpanded = !isExpanded  
    }

    $: currentRoute = $page.url.pathname; 
</script>

<svelte:head>
    <script>
      window.addEventListener( "scroll", function() {
    	    let header = document.querySelector("header");
    	    let rect = header.getBoundingClientRect();
    	    let y = rect.top + window.pageYOffset;
    	    if (y < 50) {
    	        header.classList.add('is-top');
    	    } else {
    	        header.classList.remove('is-top');
    	    }
	    });
    </script>
</svelte:head>

<header class="is-top">
    
  <Saos animation={"header-link 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
    <div class="button menu-button sp" 
      class:clicked={clicked} 
      on:click="{() => clicked = !clicked}"
      on:click|preventDefault={clickHandler}
    >
      <div class="h3 uppercase"></div>
    </div>
  </Saos>

    <ul class="pc">

      <li>
        <Saos animation={"header-link 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
          <a href="/archives" class="uppercase regular" class:link-active={currentRoute === "/archives"}>Archives</a>
        </Saos>
      </li>
      
      <li>
        <Saos animation={"header-link 1.5s .15s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
          <a href="/studio" class="uppercase regular" class:link-active={currentRoute === "/studio"}>Studio</a>
        </Saos>
      </li>

      <li>
        <Saos animation={"header-link 1.5s .3s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
          <a href="/contact" class="uppercase regular" class:link-active={currentRoute === "/contact"}>Contact</a>
        </Saos>
      </li>

      <!--
      <li>
        <Saos animation={"header-link 1.5s .45s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
          <a href="/career" class="uppercase regular" class:link-active={currentRoute === "/career"}>Career</a>
        </Saos>
      </li>
      -->
    </ul>
    <Saos animation={"header-link 1.5s cubic-bezier(0.3, 0, 0.7, 1) both"} once={true}>
    <a href="/">
      <Logo />
    </a>
    </Saos>
    
    {#if isExpanded}
    <Menu />
    {/if}

</header>

<style>

@keyframes -global-header-link {0% {transform: translateX(.25rem);opacity: 0;}100% {transform: translateX(0);opacity: 1;}}

.menu-button .h3 {
  position: relative;
  z-index: 999;
  transition: 1.5s cubic-bezier(.8, 0, 0, .8);
}
.menu-button .h3::after {
  content: 'MENU';
  transition: 1.5s cubic-bezier(.8, 0, 0, .8);
}
.menu-button.clicked .h3::after {
  content: 'CLOSE';
  color: white;
  transition: 1.5s cubic-bezier(.8, 0, 0, .8);
}

header {
    width: 100vw;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem var(--padding);
    position: fixed;
    top: 0;
    background: var(--backgroundColor);
    transition: .5s ease-in-out;
    z-index: 998;
}

header ul li a.link-active {opacity: 1;}

header.scrolled {transform: translateY(-7.5rem);}

header ul li {
  transform: translateY(2px);
  display: inline-block;}
header ul li a {
  opacity: .25;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-right: 4rem;
  transition: 1s;
}


@media screen and (max-width: 480px) {
  header {
    height: 4.5rem;
    padding: 0 var(--padding);
    transition: .5s ease-in-out;
  }

  header a {transition: .5s ease-in-out;}

}
</style>
