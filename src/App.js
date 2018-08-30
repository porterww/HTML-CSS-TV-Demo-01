import React, { Component } from "react"
import "./manage.css"
import Manage_page from './Manage_page'
import Preview_page from './Preview_page'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Manage_page} />
            <Route path="/Preview_page" component={Preview_page} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
