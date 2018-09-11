import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'
import PropTypes from 'prop-types'

class PreviewPage extends Component {
  static propTypes = {
    show: PropTypes.object.isRequired
  }

  state = {
    selectedShow: {
      name: '',
      rating: '',
      imgUrl: ''
    }
  }

  renderShows = () => {
    return (
      <TVShow name={this.props.show.name} selectHandler={this.tvShowSelected} />
    )
  }

  tvShowSelected = () => {
    console.log('tv show selected')
    this.setState({
      selectedShow: {
        name: this.props.show.name,
        rating: this.props.show.rating,
        imgUrl: this.props.show.imgUrl
      }
    })
  }

  render() {
    return (
      <div className="main-body">
        <header>
          <SiteNav />
        </header>
        <main>
          <div className="listings">
            <section id="show_listing">
              <div className="show-listing-header">
                <h1>Shows</h1>
              </div>
              <div className="show-listing-header">{this.renderShows()}</div>
            </section>
            <section className="editor">
              <h2>{this.state.selectedShow.name}</h2>
              <label id="rating" htmlFor="rating">
                {this.state.selectedShow.rating}
              </label>
              <img id="img" src={this.state.selectedShow.imgUrl} />
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

export default PreviewPage
