import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer, Circle, Star } from 'react-konva'
import './overview.css'

class PuttOverview extends Component {
  render() {
    let puttDetailList = this.props.puttLog.map( putt => {
      return(<p key={putt.holeNum}>Hole #{putt.holeNum}: {putt.mode} </p>)
    })

    return (
      <div className='putting-overview'>
        <h1 className='title'>Overview</h1>
        <h2 className='description'>More features and stats coming soon!</h2>
        {
          (puttDetailList.length > 0) ?
            <div>
              <div className="canvas-container">
                <Stage width={this.props.canvasWidth} height={this.props.canvasHeight}>
                  <Layer>
                    {this.props.puttCanvasShapes}
                  </Layer>
                </Stage>
              </div>
              {puttDetailList}
            </div>
          :
            <p>No Data Available. Log your putts <Link to='/disc-golf-putting-logbook/log'>here</Link>, then check your overview.</p>
        }
      </div>
    )
  }

}

export default PuttOverview
