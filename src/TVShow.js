import React, { Component } from 'react'

export default class TVShow extends Component {
  renderDelete() {
    if (this.props.allowDelete === true) {
      return <button>Delete</button>;
    }
  }
  render() {
    return (
      <div>
        <button>{this.props.name}</button>
        {this.renderDelete()}
      </div>
    )
  }
}
