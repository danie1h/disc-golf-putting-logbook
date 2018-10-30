import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer } from 'react-konva'
import './results.css'

class PuttResults extends Component {
  render () {
    let puttDataList = this.props.puttLog.map(putt => {
      return (
        <tr key={putt.holeNum}>
          <td>{putt.holeNum}</td>
          <td>{putt.mode}</td>
          <td>{putt.shapeYPosition}, {putt.shapeXPosition}</td>
          <td>{putt.activeMetaTags.join(', ')}</td>
        </tr>
      )
    })

    return (
      <div className='putting-results'>
        <header className='page-header'>
          <h1 className='title'>Results</h1>
          <p className='coming-soon'>More features and stats coming soon!</p>
        </header>
        <hr className='divider' />
        {
          (puttDataList.length > 0)
            ? (
              <div id='valid-putting-results'>
                <div className='canvas-container'>
                  <Stage width={this.props.canvasWidth} height={this.props.canvasHeight}>
                    <Layer>
                      {this.props.puttCanvasShapes}
                    </Layer>
                  </Stage>
                </div>
                <table className='data-table'>
                  <thead>
                    <tr>
                      <th>Hole #</th>
                      <th>Putt Attempt</th>
                      <th>Position</th>
                      <th>Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {puttDataList}
                  </tbody>
                </table>
              </div>
            )
            : (
              <p id='no-data'>No Data Available. Log your putts <Link to='/disc-golf-putting-logbook/log'>here</Link>, then check your results.</p>
            )
        }
      </div>
    )
  }
}

export default PuttResults
