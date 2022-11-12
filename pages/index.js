import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Космос</title>
        <link rel="icon" href="/favicon.png" />
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
        <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
      </form>
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
