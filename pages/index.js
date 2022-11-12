import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
      <header>
        <h1>Космос: неизведанный мир</h1>
        <nav>
          <a href="#" class="iconup">
            <img src="assets/header/sputnik.png" alt="" />
            Солнечная система
          </a>
          <a href="#" class="iconup">
            <img src="assets/header/rocket.png" alt="" />
            Техника
          </a>
          <a href="#" class="iconup">
            <img src="assets/header/star.png" alt="" />
            Земные звёзды
          </a>
        </nav>
      </header>
      <main>
        <section id="system">
          <h2>Солнечная система</h2>
          <article>
            <div class="planet">
              <img src="assets/planets/venus.jpg" alt="" />
              <p>Венера</p>
            </div>
            <div class="planet">
              <img src="assets/planets/earth.jpg" alt="" />
              <p>Земля</p>
            </div>
            <div class="planet">
              <img src="assets/planets/jupiter.jpg" alt="" />
              <p>Юпитер</p>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <img class="socicon vk" src="assets/footer/vk.png" />
        <img class="socicon yt" src="assets/footer/youtube.png" />
        <img class="socicon tg" src="assets/footer/telegram.png" />
        <img class="socicon snpcht" src="assets/footer/snapchat.png" />
      </footer>
    </body>
      <Footer />
    </div>
  )
}
