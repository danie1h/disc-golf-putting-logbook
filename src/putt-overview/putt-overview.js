import React, { Component } from 'react'
import './putt-overview.css'

class PuttOverview extends Component {
  render() {
    return (
      <div className="putting-overview">
        <button className="overview" type="submit" onClick={this.props.captureClick}>Overview</button>
      </div>
    )
  }

}

export default PuttOverview
