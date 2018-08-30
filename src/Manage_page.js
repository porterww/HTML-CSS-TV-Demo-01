import React, { Component } from "react"
import SiteNav from "./SiteNav"

class Manage_page extends Component {
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
            <label id="show1" htmlFor="show1">
              <button
                id="showbutton1"
                name="show1"
                type="submit"
                value="Show 1"
                // onClick="showOne()"
              >
                My Hero Acedamia
              </button>
              <button
                id="delete1"
                name="delete1"
                type="submit"
                value="delete"
                // onClick="deleteShowOne()"
              />
            </label>
            <label id="show2" htmlFor="show2">
              <button
                id="showbutton2"
                name="show2"
                type="submit"
                value="Show 2"
                // onClick="showTwo()"
              >
                Fairy Tail
              </button>
              <button
                id="delete2"
                name="delete2"
                type="submit"
                value="delete"
                // onClick="deleteShowTwo()"
              />
            </label>
          </section>
          <section className="editor">
            <form id="new-edit">
              <h2>New/Edit Show</h2>
              {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
              <label id="name" htmlFor="name">
                Name:
                <input type="text" />
              </label>
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
              <label id="imageURL" htmlFor="imageURL">
                ImageURL:
                <input type="imageURL" />
              </label>
              <div id="create-update-button">
                <button
                  id="create-update"
                  type="submit"
                  value="Update"
                //   onClick="createUpdate()"
                >
                  Create/Update
                </button>
              </div>
            </form>
          </section>
          <footer>&copy; 2018 Porter Webster</footer>
        </main>
      </div>
    )
  }
}

export default Manage_page
