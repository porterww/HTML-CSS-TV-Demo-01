import React, { Component } from "react"
import "./manage.css"
import Manage_page from './Manage_page'
import Preview_page from './Preview_page'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faMinusCircle)

class App extends Component {
  state = {
    show: {
        name:'',
        img: '',
        rating: ''
    }
  }

  renderManagePage = () => {
    return(
      <Manage_page show={this.state.show} 
      tvShowDeleted={this.tvShowDeleted} 
      saveTVShow={this.saveTVShow} />
    )
  }

  tvShowDeleted = () => {
    console.log('tv show deleted')
    this.setState({
      show: {
        name: ''
      }
    })
}
saveTVShow = (showToSave) => {
  console.log('this is the function from save tv show in app.js', showToSave)
    this.setState ({
      show: {
        name: showToSave.name
      }
    })
    console.log(showToSave)
}

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/Preview_page" component={Preview_page} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
