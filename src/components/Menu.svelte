<script>
import { fade, fly } from 'svelte/transition';
import { expoInOut, expoOut, quadInOut, sineInOut } from 'svelte/easing';

</script>

<div class="Menu"
    in:fade={{ delay: 0, duration: 1500, easing: sineInOut }}
    out:fade={{ delay: 500, duration: 1500, easing: quadInOut }}
>
    <ul class="wrapper">
        <li in:fly={{ y: 1, delay: 30, duration: 2000, easing: quadInOut }}
            out:fly={{ duration: 800, easing: quadInOut }}>
            <a href="/archives"><h1 class="uppercase regular" lang="en">Archives</h1></a>
        </li>
        <li in:fly={{ y: 1, delay: 30, duration: 2000, easing: quadInOut }}
            out:fly={{ duration: 800, easing: quadInOut }}>
            <a href="/studio"><h1 class="uppercase regular" lang="en">Studio</h1></a>
        </li>
        <li in:fly={{ y: 1, delay: 30, duration: 2000, easing: quadInOut }}
            out:fly={{ duration: 800, easing: quadInOut }}>
            <a href="/contact"><h1 class="uppercase regular" lang="en">Contact</h1></a>
        </li>
        <li in:fly={{ y: 1, delay: 30, duration: 2000, easing: quadInOut }}
            out:fly={{ duration: 800, easing: quadInOut }}>
            <a href="/career"><h1 class="uppercase regular" lang="en">Career</h1></a>
        </li>
        
        <div in:fly={{ y: 1, delay: 40, duration: 2000, easing: quadInOut }}
             out:fly={{ duration: 800, easing: quadInOut }}>
            <h5 class="semitrans">Find us on</h5>
            <a href="https://www.instagram.com/one.inc.tokyo/"><h3 class="uppercase regular" lang="en">Behance</h3></a>
            <a href="https://www.instagram.com/one.inc.tokyo/"><h3 class="uppercase regular" lang="en">Instagram</h3></a>
        </div>

    </ul>

    <div class="container"
        in:fly={{ y: 1, delay: 50, duration: 2000, easing: quadInOut }}
        out:fly={{ duration: 800, easing: quadInOut }}>
        <h3 class="h5" lang="en">one inc.<br>1F JP Noie Ebisunishi, 1-33-6 <br>Ebisunishi Shibuya, Tokyo 150-0021</h3>
        <h4 class="h5 semitrans" lang="en">©︎ 2022 one inc.</h4>
    </div>

</div>


<style>

.Menu {    
    width: 100vw;
    height: 100vh;
    padding: 15vh var(--padding) 4rem;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--darkGray);
    z-index: 997;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.Menu * {
    color: var(--backgroundColor);
    fill: var(--backgroundColor);
}

.Menu .wrapper a {display: block;}
.Menu .wrapper h1 {
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
}

.Menu .wrapper h3 {margin-top: calc(var(--pX) * 1.5);}
.Menu h4 {margin-top: 24px;}

.Menu ul h5 {margin-top: 4rem;}
    
</style>