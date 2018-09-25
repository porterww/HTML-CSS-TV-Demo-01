import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TVShow extends Component {
  static propTypes = {
    name: PropTypes.string,
    allowDelete: PropTypes.bool,
    selectHandler: PropTypes.func,
    deleteHandler: PropTypes.func
  }

  renderDelete() {
    if (this.props.allowDelete === true) {
      return (
        <FontAwesomeIcon
          icon="minus-circle"
          className="deletebutton"
          onClick={this.props.deleteHandler}
        />
      )
    }
  }
  renderButtons() {
    if (this.props.name) { 
      return (
        <div>
          <button className="showbutton" onClick={this.props.selectHandler}>
            {this.props.name}
          </button>
          {this.renderDelete()}
        </div>
      )
    }
  }
  render() {
    return <div className="show-buttons">{this.renderButtons()}</div>
  }
}
