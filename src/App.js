import React, { Component } from 'react'
import './manage.css'
import ManagePage from './ManagePage.js'
import PreviewPage from './PreviewPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faMinusCircle)

class App extends Component {
  state = {
    show: {
      name: '',
      imgUrl: '',
      rating: ''
    },
    tvShows: []
  }

  renderPreviewPage = () => {
    return <PreviewPage show={this.state.show} />
  }

  renderManagePage = () => {
    return (
      <ManagePage
        tvShows={this.state.tvShows}
        show={this.state.show}
        tvShowDeleted={this.tvShowDeleted}
        saveTVShow={this.saveTVShow}
      />
    )
  }

  tvShowDeleted = () => {
    this.setState({
      show: {
        name: ''
      }
    })
  }
  saveTVShow = showToSave => {
    this.setState(prevState => ({
      tvShows: [
        ...prevState.tvShows,
        {
          name: showToSave.name,
          rating: showToSave.rating,
          imgUrl: showToSave.imageUrl
        }
      ]
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/PreviewPage" component={this.renderPreviewPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
