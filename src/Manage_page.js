import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class Manage_page extends Component {
    state = {
      nameInProgress: '',
      imgInProgress: '',
      ratingInProgress: '',
      show: {
          name:'',
          img: '',
          rating: ''
      }
    }

    handleNameChange = (event) => {
      this.setState ({
        nameInProgress: event.target.value
      })
    }

    handleRating = (event) => {
      this.setState ({
        ratingInProgress: event.target.value,
        rating : {
          name: ''
        }
      })
    }

    handleImgURL = (event) => {
      this.setState ({
        imgInProgress: event.target.value,
        img: {
          name: ''
        }
      })
    }

    tvShowSelected = () => {
        console.log('tv show selected')
        this.setState({
          nameInProgress: this.state.show.name
        })
    }
    tvShowDeleted = () => {
        console.log('tv show deleted')
        this.setState({
          show: {
            name: ''
          }
        })
    }
    saveTVShow = () => {
        this.setState ({
          nameInProgress: '',
          imgInProgress: '',
          ratingInProgress: '',
          show: {
            name: this.state.nameInProgress
          }
        })
        console.log('TV Show saved')
    }

    renderShows = () => {
      return(
        <TVShow name={this.state.show.name} selectHandler={this.tvShowSelected} 
            deleteHandler={this.tvShowDeleted} allowDelete={true} />
      )
    }

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
            {this.renderShows()}
            </div>
          </section>
          <section className="editor">
              <h2>New/Edit Show</h2>
              {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
              <label htmlFor="name">
                Name:
                <input id="name" type="text" value={this.state.nameInProgress} onChange={this.handleNameChange}/>
              </label>
              <label htmlFor="rating">
                Rating:
                <input id="rating" type="text" value={this.state.ratingInProgress} onChange={this.handleRating} />
              </label>
              <label htmlFor="imageURL">
                ImageURL:
                <input id="imageURL" type="imageURL" value={this.state.imgInProgress} onChange={this.handleImgURL} />
              </label>
              <div className="save-tv-show">
              <button className="save-button" type="Submit" onClick={this.saveTVShow}>Save TV Show</button>
              </div>
              <footer><div>&copy; 2018 Porter Webster</div></footer>
          </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Manage_page
