<script>
import { fade, fly } from 'svelte/transition';
import { expoInOut, expoOut, quadOut } from 'svelte/easing';

</script>

<div class="Menu"
    in:fade={{ delay: 0, duration: 1500, easing: expoInOut }}
    out:fade={{ delay: 0, duration: 2000, easing: expoInOut }}
>
    <ul class="wrapper">
        <li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}>
            <a href="/archives"><h1 class="uppercase regular">Archives</h1></a>
        </li>
        <li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}>
            <a href="/studio"><h1 class="uppercase regular">Studio</h1></a>
        </li>
        <li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}>
            <a href="/contact"><h1 class="uppercase regular">Contact</h1></a>
        </li>
        <li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}>
            <a href="/career"><h1 class="uppercase regular">Career</h1></a>
        </li>
        
        <h5 class="semitrans">Find us on</h5>
        <a href="https://www.instagram.com/one.inc.tokyo/"><h3 class="uppercase regular">Behance</h3></a>
        <a href="https://www.instagram.com/one.inc.tokyo/"><h3 class="uppercase regular">Instagram</h3></a>
        
    </ul>

    <div class="container">
        <h3 class="h5">one inc.<br>1F JP Noie Ebisunishi, 1-33-6 <br>Ebisunishi Shibuya, Tokyo 150-0021</h3>
        <h4 class="h5 semitrans" lang="en">©︎ 2022 one inc.</h4>
    </div>

</div>


<style>

.Menu {    
    width: 100vw;
    height: 100vh;
    padding: 15vh 6vw 4rem;
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
    font-size: 2.8rem;
    margin-bottom: 2.8rem;
}
.Menu .wrapper h3 {margin-top: calc(var(--pX) * 1.5);}
.Menu h4 {margin-top: 24px;}
    
</style>