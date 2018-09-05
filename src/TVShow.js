import React, { Component } from 'react'

export default class TVShow extends Component {
  renderDelete() {
    if (this.props.allowDelete === true) {
      return <button onClick={this.props.deleteHandler}>Delete</button>
    }
  }
  renderButtons() {
    if (this.props.name) {
      return(
      <div>
        <button onClick={this.props.selectHandler}>{this.props.name}</button>
        {this.renderDelete()}
      </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}
