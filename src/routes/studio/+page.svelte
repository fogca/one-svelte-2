<script>
  import Saos from "saos";
  import O from '../../components/O.svelte'
	
</script>

<svelte:head>
	<title>Studio - one inc. | Brand Design Consultancy</title>
</svelte:head>

    <main class="Studio">
      <O />
      <section id="st1">
        <h1 class="uppercase">Studio</h1>
        
        <div class="wrapper">
          <h3 class="p studio-jp">one inc.はグラフィックやデジタルデザインなどのヴィジュアルコミュニケーションを軸に、
            コーポレートやブランドアイデンティティを構築するクリエイティブ&ブランドデザインスタジオです。
            物事の常識に囚われることなく、常に新たな視点を持ち、
            模索することで、今までにない新しく記憶に残る体験をを常に選択します。
            
            これまで培ってきた経験を存分に活用することで、ブランドの本質を模索し、最適なビジュアルを構築します。常識に囚われない独創的で革新的な視点は、ビジュアルアイデンティをより揺るぎなく印象的なものへと変貌をとげます。one inc. はヴィジュアルアイデンティティを中心に、様々な領域のデザイン、およびクリエイティブディレクションを行うデザインスタジオです。私たちの仕事は、デザインの力を重視するクライアントとの協力によって、現代の新たな文化を形作っていくことです。
            
            私たちにとってビジュアルやグラフィックとは、目に見えるすべてに関係するものであり、一部の人に向けた特別なものではなく、多くの人にとって不可欠なものだと考えています。同様に、知的で文化的であるということも、本来は一部の人の特権ではなく、誰もが生きる上で必要とすることではないでしょうか。デザインを通してクリエイティブな生態系を作っていくこと、そして、知的で文化的な社会の発展に貢献していくこと。こうした理念のもと、私たちはデザインを行なっています。
            
            目に見える物だけがデザインではなく、
            物事の本質や在り方、存在意義から考えることが本来のクリエーションであると信じています。</h3>
          <h4 class="h5 studio-en" lang="en">
            one inc. is a Tokyo-based a creative and design consulting studio focusing on brand design with graphic and digital experiences. Our main feature is to bring a new perspective to all projects which eventually leads to novel experiences. We leverage our extensive graphic and digital experience to discover the essence of the brand and create the best style from the best design collectives possible. Our design, which expresses a unique and innovative perspective and the essence of the brand, makes the brand’s visual identity stronger and more iconic and makes it look attractive.Bring a new perspective to all projects from our design collective.
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
#st1 h3, #st1 .studio-jp p {
  -webkit-text-stroke: .0725px;
  font-size: 1.8rem;
  margin: calc(var(--pX) * 3.5) 0 calc(var(--pX) * 2);
  text-align: justify;
  line-height: 1.8;
}
#st1 h4 {line-height: 1.575;}


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

  #st1 .wrapper {width: 95%;}
  #st1 .wrapper h3, #st1 .studio-jp p {
    font-size: 1.5rem;
    line-height: 1.8;
  }

  #st1 .wrapper h4 {margin-top: calc(var(--pX) * 5);}

  

  #st1 p {
    line-height: 1.8;
    width: 92.25%;
    font-size: 1.48rem;}

  #st2 {margin-top: calc(var(--pX) * 12.5);}
  #st2 h1 {margin-bottom: calc(var(--pX) * 5);}
  #st2 .h6 {font-size: 1.5rem;}
  #st2 .h4 {font-size: 2rem;}
  #st2 h4 {margin-bottom: calc(var(--pX) * 4.5);}
}
</style>