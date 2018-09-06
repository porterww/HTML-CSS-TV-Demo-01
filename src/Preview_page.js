import React, { Component } from "react"
import SiteNav from "./SiteNav"
import TVShow from './TVShow'

class Preview_page extends Component {
  render() {
    return (
      <div className="main-body">
        <header>
          <SiteNav />
        </header>
        <main>
          {/* The main will be the parent of the two sections and the sections will be turned into collums in flexboxc so they are next to eachother. Do not use Row for these. */}
          <div className="listings">
          <section id="show_listing">
          <div className="show-listing-header">
              <h1>Shows</h1>
            <TVShow
              name="My Hero Acedamia"
              className="show1"
              allowDelete={false}
            />
            <TVShow name="Fairy Tail" className="show2" allowDelete={false} />
          </div>
          </section>
          <section className="editor">
              <h2>[Show Title]</h2>
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
              <footer><div>&copy; 2018 Porter Webster</div></footer>
          </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Preview_page