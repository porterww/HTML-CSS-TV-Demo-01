import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Manage</Link>
        <div className="middle-column"></div>
        <Link to="/PreviewPage">Preview</Link>
      </nav>
    )
  }
}

export default SiteNav