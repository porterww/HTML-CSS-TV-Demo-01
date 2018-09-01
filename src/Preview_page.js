import React, { Component } from "react"
import SiteNav from "./SiteNav"
import TVShow from './TVShow'

class Preview_page extends Component {
  render() {
    return (
      <div id="body">
        <header>
          <SiteNav />
        </header>
        <main>
          {/* The main will be the parent of the two sections and the sections will be turned into collums in flexboxc so they are next to eachother. Do not use Row for these. */}
          <section id="show_listing">
            <h1>Shows</h1>
            <TVShow
              name="My Hero Acedamia"
              className="show1"
              allowDelete={false}
            />

            <TVShow name="Fairy Tail" className="show2" allowDelete={false} />
          </section>
          <section className="editor">
            <form id="show-preview">
              <h2>[Fairy Tail]</h2>
              {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
              <label id="rating" htmlFor="rating">
                Rating:
                <input id="1star" type="radio" name="ratingstars"/>
                  1
                <input id="2star" type="radio" name="ratingstars"/>
                  2
                <input id="3star" type="radio" name="ratingstars"/>
                  3
                <input id="4star" type="radio" name="ratingstars"/>
                  4
                <input id="5star" type="radio" name="ratingstars"/>
                  5
              </label>
              <div id="img" />
            </form>
          </section>
          <footer>&copy; 2018 Porter Webster</footer>
        </main>
      </div>
    )
  }
}

export default Preview_page