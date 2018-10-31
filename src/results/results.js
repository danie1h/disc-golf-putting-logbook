import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer } from 'react-konva'
import PropTypes from 'prop-types'
import './results.css'

/**
 * Returns the content of the Results page
 * * renders the data table
 * * displays the overview canvas of all putts
 * * displays all putts and putt information in a data table
 *
 * If no putt data is available, then indicate there is no message and provide a link to the log page
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
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

PuttResults.propTypes = {
  /** Indicates the current hole number the user is logging their putt */
  holeNum: PropTypes.number,
  /** Stores the hit or miss string, which determines what shape to render */
  mode: PropTypes.string,
  /** x coordinate of the rendered shape. Default is in the center of the canvas. Updated based on user drag or click. */
  shapeXPosition: PropTypes.number,
  /** y coordinate of the rendered shape. Default is in the center of the canvas. Updated based on user drag or click. */
  shapeYPosition: PropTypes.number,
  /** The width at which the canvas is rendered */
  canvasWidth: PropTypes.number,
  /** The height at which the canvas is rendered */
  canvasHeight: PropTypes.number,
  /** List of meta tag strings to output in the putting log data table */
  activeMetaTags: PropTypes.array,
  /** List of logged putting shapes to display on the canvas */
  puttCanvasShapes: PropTypes.array,
  /** List of submitted putts and putt details */
  puttLog: PropTypes.array
}
