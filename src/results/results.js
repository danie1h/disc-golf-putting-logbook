import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer } from 'react-konva'
import { ResultsTable } from './results-viz/results-table.js'
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
      <div id='putting-results' className='container-fluid mt-4 px-5 animated fadeInLeft fast'>

        <header>
          <div className='row'>
            <div className='col-4'>
              <h1 className='blue-grey-text h1-responsive'>Results</h1>
            </div>
            <div className='col-8 d-flex flex-row justify-content-end align-items-center'>
              <p id='coming-soon' className='green-text m-0'>More features coming soon!</p>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <hr className='my-2' />
            </div>
          </div>
        </header>
        {
          (puttDataList.length > 0)
            ? (
              <div id='results-data'>
                <div className='row my-1'>
                  <div className='col d-flex flex-row justify-content-center'>
                    <div className='canvas-container'>
                      <Stage width={this.props.canvasWidth} height={this.props.canvasHeight}>
                        <Layer>
                          {this.props.puttCanvasShapes}
                        </Layer>
                      </Stage>
                    </div>
                  </div>
                </div>
                <ResultsTable puttLog={this.props.puttLog} />
              </div>
            )
            : (
              <div className='row my-1'>
                <div className='col text-center'>
                  <p id='no-data'>No Data Available. Log your putts <Link to={process.env.PUBLIC_URL + '/log'}>here</Link>, then check your results.</p>
                </div>
              </div>
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
