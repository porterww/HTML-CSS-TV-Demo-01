import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
  render() {
    return (
      <nav>
        <Link to="/" id="manage">Manage</Link>
        <div id="middle-column"></div>
        <Link to="/Preview_page" id="preview">Preview</Link>
      </nav>
    )
  }
}

export default SiteNav