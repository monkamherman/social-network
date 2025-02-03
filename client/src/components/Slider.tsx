
import "./index.css"

function Slider() {
  return (
    <div data-parallax='container'>
      <header data-parallax='group'>
        <div className="title" data-parallax='layer' data-parallax-speed='front'>
          <h1>K2N GROUP</h1>
          <span>Infinity War</span>
          <p>A CSS parallax experiment</p>
        </div>
        <div data-parallax='layer' data-parallax-speed='slowest' data-image='captain-america'></div>
        <div data-parallax='layer' data-parallax-speed='slower' data-image='scarlet-witch'></div>
        <div data-parallax='layer' data-parallax-speed='slow' data-image='black-widow'></div>
        <div data-parallax='layer' data-parallax-speed='slower' data-image='vision'></div>
        <div data-parallax='layer' data-parallax-speed='slowest' data-image='iron-man'></div>
      </header>

      <section className="preamble" data-parallax='none'>
        <p><strong>Avengers: Infinity War</strong> is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers...</p>
      </section>

      <section className="parallax" data-parallax='group'>
        <div data-parallax='layer' data-parallax-speed='base'></div>
        <p><strong>Parallax</strong> (from Ancient Greek παράλλαξις 'alternation') is a displacement or difference in the apparent position...</p>
        <div className="stars" data-parallax='layer' data-parallax-speed='slow'></div>
        <div className="deep-stars" data-parallax='layer' data-parallax-speed='slowest'></div>
      </section>

      <section className="plot" data-parallax='group'>
        <div className="plot--content" data-parallax='layer' data-parallax-speed='base'>
          <h2>Synopsis</h2>
          <p>The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos...</p>
        </div>
        <div className="character" data-parallax='layer' data-parallax-speed='slowest' data-image='nebula'></div>
        <div className="character" data-parallax='layer' data-parallax-speed='slower' data-image='winter-soldier'></div>
        <div className="character" data-parallax='layer' data-parallax-speed='slower' data-image='okoye'></div>
        <div className="character" data-parallax='layer' data-parallax-speed='slower' data-image='captain-america-2'></div>
        <div className="character" data-parallax='layer' data-parallax-speed='slow' data-image='mantis'></div>
        <div className="character" data-parallax='layer' data-parallax-speed='slow' data-image='scarlet-witch-2'></div>
      </section>

      <footer data-parallax='none'>
        <h3>Avengers <small>Infinity War</small></h3>
        <p>A CSS parallax experiment based on <a href='https://keithclark.co.uk/articles/pure-css-parallax-websites/' rel='external' target='_blank'>Keith Clark's article</a>.</p>
        <p>Images from <a href='https://www.marvel.com/' rel='external' target='_blank'>Marvel</a> and PNG cut-outs by <a href='https://www.deviantart.com/stark3879' rel='external' target='_blank'>stark3879 on DeviantArt</a>.</p>
        <p>Created with <span aria-label='love'>❤️</span> (and tears) by <a href='https://codepen.io/aepicos/'>@aepicos</a>.</p>
      </footer>

      <aside className="todo" data-parallax='none'>
        <small><strong>TODO</strong>: figure out a work-around for <code>overflow:hidden</code> as it breaks the parallax on iOS <span role='presentation'>☹️</span> and (time permitting) create a more robust CSS library.</small>
      </aside>
    </div>
  )
}

export default Slider