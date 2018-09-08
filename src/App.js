import React, { Component } from "react"
import "./manage.css"
import ManagePage from "./ManagePage.js"
import PreviewPage from "./PreviewPage.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

library.add(faMinusCircle)

class App extends Component {
  static propTypes = {
    show: PropTypes.object.isRequired
  }

  state = {
    show: {
      name: "",
      img: "",
      rating: ""
    },
    selectTVShow: {
      name: "",
      rating: "",
      imgURL: ""
    }
  }

  renderPreviewPage = () => {
    <PreviewPage />
  }

  renderManagePage = () => {
    return (
      <ManagePage
        show={this.state.show}
        tvShowDeleted={this.tvShowDeleted}
        saveTVShow={this.saveTVShow}
      />
    )
  }

  tvShowDeleted = () => {
    this.setState({
      show: {
        name: ""
      }
    })
  }
  saveTVShow = showToSave => {
    console.log("this is the function from save tv show in app.js", showToSave);
    this.setState({
      show: {
        name: showToSave.name
      }
    })
    console.log(showToSave);
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
