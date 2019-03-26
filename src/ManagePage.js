import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class ManagePage extends Component {
  state = {
    nameInProgress: '',
    imgInProgress: '',
    ratingInProgress: ''
  }

  handleNameChange = event => {
    this.setState({
      nameInProgress: event.target.value
    })
  }

  handleRating = event => {
    this.setState({
      ratingInProgress: event.target.value
    })
  }

  handleImgURL = event => {
    this.setState({
      imgInProgress: event.target.value
    })
  }

  async componentDidMount() {
    try {
      const r = await fetch('http://localhost:1337/shows', {
        method: 'GET',
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const tvShows = await r.json()
      this.setState({ tvShows })
    } catch (err) {
      //handle error
      return this.setState({ err: err.message })
    }
  }
  async postData() {
    try {
      const r = await fetch('http://localhost:1337/shows', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.nameInProgress,
          rating: this.state.ratingInProgress,
          img: this.state.imgInProgress
        })
      })
      const tvShows = await r.json()
      if (tvShows.isJoi) {
        this.setState({ message: tvShows.details[0].context.label })
        console.log(tvShows)
      } else {
        console.log(tvShows)
        this.setState({ tvShows })
      }
    } catch (err) {
      //handle error
      return this.setState({ err: err.message })
    }
  }

  // tvShowSelected = () => {
  //   this.setState({
  //     nameInProgress: this.props.tvShows.name,
  //     ratingInProgress: this.props.tvShows.rating,
  //     imgInProgress: this.props.tvShows.imgUrl
  //   })
  // }
  // tvShowDeleted = () => {
  //   this.props.tvShowDeleted()
  // }

  saveTVShow = () => {
    this.postData()
  }

  renderTVShows = () => {
    if (this.state.tvShows) {
      return this.state.tvShows.map((tvShow, i) => {
        return (
          <TVShow
            key={i}
            name={tvShow.name}
            selectHandler={this.tvShowSelected}
            deleteHandler={this.tvShowDeleted}
            allowDelete={true}
          />
        )
      })
    }
  }

  //this is for the for..of loop before using simplisity of map()
  // renderTVShows = () => {
  //   const showsToRender = []
  //   for (const g of this.props.tvShows) {
  //     showsToRender.push(
  //       <TVShow
  //         key={g.name}
  //         name={g.name}
  //         selectHandler={this.tvShowSelected}
  //         deleteHandler={this.tvShowDeleted}
  //         allowDelete={true}
  //       />
  //     )
  //   }
  //   return showsToRender
  // }

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
              </div>
              {this.renderTVShows()}
            </section>
            <section className="editor">
              <h2>New/Edit Show</h2>
              {this.state.message}
              {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
              <label htmlFor="name">
                Name:
                <input
                  id="name"
                  type="text"
                  value={this.state.nameInProgress}
                  onChange={this.handleNameChange}
                />
              </label>
              <label htmlFor="rating">
                Rating:
                <input
                  id="rating"
                  type="text"
                  value={this.state.ratingInProgress}
                  onChange={this.handleRating}
                />
              </label>
              <label htmlFor="imageURL">
                ImageURL:
                <input
                  id="imageURL"
                  type="text"
                  value={this.state.imgInProgress}
                  onChange={this.handleImgURL}
                />
              </label>
              <div className="save-tv-show">
                <button
                  className="save-button"
                  type="Submit"
                  onClick={this.saveTVShow}
                >
                  Save TV Show
                </button>
              </div>
            </section>
          </div>
          <footer>
            <div>&copy; 2018 Porter Webster</div>
          </footer>
        </main>
      </div>
    )
  }
}

export default ManagePage
