<script>
    import O from './O.svelte';
    import Logo from './Logo.svelte';

</script>

<svelte:head>

</svelte:head>

<footer data-sal="fade" style="--sal-duration: 2s;">
    <div class="wrapper">
        <div>
            <h1 class="h4">one inc.</h1>
            <h2 class="h5">1F JP Noie Ebisunishi, 1-33-6 <br>Ebisunishi Shibuya, Tokyo 150-0021</h2>
        </div>
        <div>
            <h6 class="semitrans">For inquiries</h6>
            <a href="mailto:info@one.tokyo.jp">
                <h2 class="h5">info&#64;one.tokyo.jp</h2>
            </a>
        </div>
    </div>
    
    <div class="wrapper">
        <h3><Logo /></h3>
        <h4 class="h6 semitrans">©︎ 2022 one inc.</h4>
    </div>
    <O />
</footer>

<style>
footer {
    margin-top: calc(var(--pX) * 15);
    padding-top: calc(var(--pX) * 15);
    padding-bottom: calc(var(--pX) * 5);
    padding-left: var(--padding);

    width: 100%;
    background-color: var(--footer);
    background-color: var(--backgroundColor);
    position: relative;
    overflow: hidden;
}

footer h2 {
    margin-top: calc(var(--pX) * 1.5);
    margin-bottom: calc(var(--pX) * 10);
}

footer div:nth-of-type(1) div {margin-right: calc(var(--pX) * 15);}

footer .wrapper {
    display: flex;
    align-items: flex-end;
}
footer .wrapper h4 {
    padding-bottom: 1.25rem;
    margin-left: calc(var(--pX) * 5);
}

@media screen and (max-width: 480px) {
    footer {
        margin-top: 0;
        padding-top: 10rem;
        padding-left: 7.25vw;
        padding-bottom: 1.5rem}
    footer div:nth-of-type(1) div {margin-right: 0;}

    footer h1.h4 {font-size: 2.4rem;}
    footer h2 {
        margin-top: calc(var(--pX) * 3);
        margin-bottom: calc(var(--pX) * 5);}
    footer h3 {margin-top: calc(var(--pX) * 9);}
    footer .wrapper h4 {margin-left: 0;}
    footer .wrapper {display: block;}
    footer div:nth-of-type(2) h2.h5 {font-size: 2rem;}
    footer h6 {font-size: 1.6rem;}
    footer .wrapper div:nth-of-type(2) h2 {margin-top: 0.5rem;}
}


@media screen and (min-width: 1800px) {
  footer .O {
    height: 80vh;
    bottom: -55vh;
}
}
</style>
