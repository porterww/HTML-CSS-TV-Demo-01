import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'
import PropTypes from 'prop-types'

class PreviewPage extends Component {
  static propTypes = {
    show: PropTypes.object.isRequired,
    tvShows: PropTypes.array.isRequired
  }

  state = {
    selectedShow: {
      name: '',
      rating: '',
      imgUrl: ''
    }
  }

  renderTVShows = () => {
    const filterTVShows = this.props.tvShows.filter((filtershow)=> {
      console.log(filtershow.rating)
       return filtershow.rating < 6
    })
    return filterTVShows.map((filtershow, i) => {
      return ( 
        <TVShow key={i}
          name={filtershow.name}
          selectHandler={this.tvShowSelected}
        />
      )
    })
  }

  calculateAvgRating = () => {
    if (this.props.tvShows.length < 1 ) {return 0}
    if (this.props.tvShows.length === 1) {return this.props.tvShows[0].rating}
    const sumOfRatings = this.props.tvShows.reduce((prevValue, currentValue) => {
      return (prevValue.rating||prevValue)+currentValue.rating
    })
    const avgRating = sumOfRatings / this.props.tvShows.length
    return Math.round(avgRating * 10) / 10
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
              <div className="show-listing-header"><span className='avg-rating'>Average Rating: {this.calculateAvgRating()}</span>{this.renderTVShows()}</div>
            </section>
            <section className="editor">
              <h2>{this.state.selectedShow.name}</h2>
              <label id="rating" htmlFor="rating">
                {this.state.selectedShow.rating}
              </label>
              <img
                id="img"
                value="TV Show Image"
                src={this.state.selectedShow.imgUrl}
              />
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
