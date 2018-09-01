import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Manage</Link>
        <div className="middle-column"></div>
        <Link to="/Preview_page">Preview</Link>
      </nav>
    )
  }
}

export default SiteNav