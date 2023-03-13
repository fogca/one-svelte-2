<script>
  import Saos from "saos";
  import O from '../../components/O.svelte'
</script>

<svelte:head>
	<title>Career - one inc. | Brand Design Consultancy</title>
</svelte:head>

    <main id="Career" class="page">
      <section id="career1">
        <O />
        <h1 class="uppercase">Career</h1>
        <div class="wrapper">
          <p class="h5">
            one inc.では、より良いブランド構築を目指し、常に新たな出会いを模索しております。
            私たちは、プロジェクトごとに外部の専門家やパートナーとチームを組み、さまざまな分野で設計を行っています。 
            私たちの考え方や仕事に共感いただける方や私たちと一緒に働くことに興味がある方は是非一度ご連絡ください。
          </p>
        </div>
      </section>

      <section id="career2">
        <h1 class="uppercase">Positions</h1>
        <h2 class="h5">現在募集中のポジション</h2>
        <div class="wrapper">

          <div class="container">
            <h3 class="h3">Assistant Director</h3>
            <h4 class="h6">アシスタントディレクター</h4>
            <p>主に印刷物における、設計から具体的なデザインの提案までを担当いただけるデザイナーを募集しています。このポジションでは、クリエイティブディレクターやプロジェクトチームと協力して、クライアントの予算や納期を尊重しながら最高レベルのクリエイティブを実現します。私たちのクライアントが必要とするのは、幅広い知識とクラフトマンシップに裏付けされた、洗練されたデザインです。
              <br><br>
              必須条件<br>
              HTML/CSS/JavaScript/PHP を使用したフロントエンド開発の実績<br>
              フロントエンドエンジニアとしての3年以上の実務経験<br>
              日本語でのコミュニケーション能力<br>
              弊社オフィスまで来れる方（原則リモートワークですが、打ち合わせ等で来ていただく場合があります）
            </p>
          </div>

          <div class="container">
            <h3 class="h3">Graphic Designer</h3>
            <h4 class="h6">グラフィックデザイナー</h4>
            <p>主に印刷物における、設計から具体的なデザインの提案までを担当いただけるデザイナーを募集しています。このポジションでは、クリエイティブディレクターやプロジェクトチームと協力して、クライアントの予算や納期を尊重しながら最高レベルのクリエイティブを実現します。私たちのクライアントが必要とするのは、幅広い知識とクラフトマンシップに裏付けされた、洗練されたデザインです。
              <br><br>
              必須条件<br>
              HTML/CSS/JavaScript/PHP を使用したフロントエンド開発の実績<br>
              フロントエンドエンジニアとしての3年以上の実務経験<br>
              日本語でのコミュニケーション能力<br>
              弊社オフィスまで来れる方（原則リモートワークですが、打ち合わせ等で来ていただく場合があります）
            </p>
          </div>

        </div>
      </section>


    </main>

<style>

#Career {
  padding-bottom: 16rem;
  background-color: var(--darkGray);}
#Career * {color: #FFF;}
#career1 {padding-top: calc(var(--pX) * 30);}

#career1 .wrapper,
#career2 .wrapper {width: 50%;}

#career1 .wrapper p {font-size: 1.8rem;}


#career2 {margin-top: 15rem;}
#career2 .wrapper {margin-top: 6rem;}
#career2 .wrapper .container {margin-bottom: 10rem;}
#career2 .wrapper .container h3 {margin-left: 1.5px;}
#career2 .wrapper .container h4 {margin: 1rem 0 2rem;}




@media screen and (max-width: 480px) {

  #Career {padding-bottom: 8rem;}
  
  #career1 {padding-top: 18.5rem;}
  #career1 .wrapper {
    width: 90%;
    margin-top: 1rem;
  }
  #career1 .wrapper p {font-size: 1.6rem;}
  
  #career2 {margin-top: 10rem;}
  #career2 .wrapper {
    width: 90%;
    margin-top: 5rem;
  }
  #career2 h2 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    letter-spacing: .05em;
  }
  #career2 .wrapper .container {margin-bottom: 7.5rem;}
  #career2 .wrapper .container h3 {
    font-size: 2.65rem;
    margin-left: .7px;
  }
  #career2 .wrapper .container h4 {
    font-size: 1.4rem;
    margin: 0.5rem 0 2.5rem;
  }

}
</style>