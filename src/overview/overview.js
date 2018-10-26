import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './overview.css'

class PuttOverview extends Component {
  render() {
    let puttDetailList = (this.props.puttLog.length > 1) ?
        this.props.puttLog.map( putt => {
          return(
            <p key={putt.holeNum}>Hole #{putt.holeNum}: {putt.mode} </p>
          )
        })
      :
        <p>No Data Available. Log your putts <Link to='/disc-golf-putting-logbook/log'>here</Link>, then check your overview.</p>

    return (
      <div className='putting-overview'>
        <h1 className='title'>Overview</h1>
        <h2 className='description'>More features and stats coming soon!</h2>
        {puttDetailList}
      </div>
    )
  }

}

export default PuttOverview
