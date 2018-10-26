import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer } from 'react-konva'
import './overview.css'

class PuttOverview extends Component {
  render() {
    let puttDataList = this.props.puttLog.map( putt => {
      return(
        <tr key={putt.holeNum}>
          <td>{putt.holeNum}</td>
          <td>{putt.mode}</td>
        </tr>
      )
    })

    return (
      <div className='putting-overview'>
        <h1 className='title'>Overview</h1>
        {
          (puttDataList.length > 0) ?
            <div>
              <div className='canvas-container'>
                <Stage width={this.props.canvasWidth} height={this.props.canvasHeight}>
                  <Layer>
                    {this.props.puttCanvasShapes}
                  </Layer>
                </Stage>
              </div>
              <table className='data-table'>
                <tr>
                  <th>Hole #</th>
                  <th>Putt Attempt</th>
                </tr>
                {puttDataList}
              </table>
            </div>
          :
            <p>No Data Available. Log your putts <Link to='/disc-golf-putting-logbook/log'>here</Link>, then check your overview.</p>
        }
        <p className='coming-soon'>More features and stats coming soon!</p>
      </div>
    )
  }

}

export default PuttOverview
