import React, { Component } from 'react'
import { PuttInfo } from './putt-info/putt-info.js'
import { DisplayPutt } from './display-putt/display-putt.js'
import { Button } from '../button/button.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './log-putt.css'

/**
 * Returns the content of the Log page
 * * hole information - hole number, hit or miss
 * * disc golf basket canvas
 * * ability for users to click or drag the location of the hit or miss
 * * selection of meta tags for further data collection
 * * option to proceed to the next hole number and repeat the process
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
class LogPutt extends Component {
  constructor (props) {
    super(props)

    this.state = {
      /** List of the active tags by index position */
      activeTagIndexList: [],
      /** Constructs the active and inactive meta tag list in JSX */
      metaTagOutput: this.props.metaTagsList.map((tag, index) => {
        return (
          <Button
            key={index}
            className='tag-btn'
            content={tag}
            onClick={(event) => {
              this.props.captureMetaTagClick(event)
              this.activateMetaTags(event)
            }}
          />
        )
      })
    }

    this.resetActiveMetaTags = this.resetActiveMetaTags.bind(this)
    this.activateMetaTags = this.activateMetaTags.bind(this)
    this.updateMetaTags = this.updateMetaTags.bind(this)
  }

  /**
 * Handle occurances where a user clicks on a meta tag.
 * If a meta tag is not active and is clicked, then activate the meta tag.
 * If a meta tag is alread activated, then deactive the meta tag.
 *
 * @public
 */
  activateMetaTags (event) {
    const clickedTagIndex = this.state.metaTagOutput.findIndex(item => {
      return event.target.innerText === item.props.content
    })

    if (this.state.activeTagIndexList.includes(clickedTagIndex)) {
      const updatedActiveTagIndexList = this.state.activeTagIndexList.filter((item, index) => item !== clickedTagIndex)
      const updatedMetaTagOutput = this.updateMetaTags(this.props.metaTagsList, updatedActiveTagIndexList)
      this.setState({
        activeTagIndexList: this.state.activeTagIndexList.filter((item, index) => item !== clickedTagIndex),
        metaTagOutput: updatedMetaTagOutput
      })
    } else {
      const updatedActiveTagIndexList = [...this.state.activeTagIndexList, clickedTagIndex]
      const updatedMetaTagOutput = this.updateMetaTags(this.props.metaTagsList, updatedActiveTagIndexList)
      this.setState({
        activeTagIndexList: [...this.state.activeTagIndexList, clickedTagIndex],
        metaTagOutput: updatedMetaTagOutput
      })
    }
  }

  /**
 * Clears all meta tag selections when a user selects the reset all option
 *
 * @public
 */
  resetActiveMetaTags (event) {
    const updatedMetaTagOutput = this.updateMetaTags(this.props.metaTagsList, [])

    this.setState({
      activeTagIndexList: [],
      metaTagOutput: updatedMetaTagOutput
    })
  }

  /**
 * Reconstructs the active and inactive meta tag list in JSX
 * @param {array} metaTagList - List of putting meta tags for user to select
 * @param {array} activeTagList - List of the active tags by index position
 *
 * @public
 */
  updateMetaTags (metaTagList, activeTagList) {
    const updatedMetaTagOutput = metaTagList.map((tag, index) => {
      if (activeTagList.includes(index)) {
        return (
          <Button
            key={index}
            className='tag-btn active'
            content={tag}
            onClick={(event) => {
              this.props.captureMetaTagClick(event)
              this.activateMetaTags(event)
            }}
          />
        )
      } else {
        return (
          <Button
            key={index}
            className='tag-btn'
            content={tag}
            onClick={(event) => {
              this.props.captureMetaTagClick(event)
              this.activateMetaTags(event)
            }}
          />
        )
      }
    })

    return updatedMetaTagOutput
  }

  render () {
    return (
      <div id='log-putt'>
        <header className='page-header'>
          <h1 className='title'>Log</h1>
          <div id='page-header-options-section'>
            <Button
              className='page-header-option reset-all-btn'
              onClick={() => {
                this.props.captureResetClick()
                this.resetActiveMetaTags()
              }}
              content='Reset All'
            />
            <Link to={process.env.PUBLIC_URL + '/results'} className='page-header-option' id='get-results'>Results</Link>
          </div>
        </header>
        <hr className='divider' />
        <div id='log-putt-controls'>
          <PuttInfo
            holeNum={this.props.holeNum}
            handleHitBtn={this.props.handleHitBtn}
            handleMissBtn={this.props.handleMissBtn}
          />
          <DisplayPutt
            mode={this.props.mode}
            x={this.props.x}
            y={this.props.y}
            captureCanvasDrag={this.props.captureCanvasDrag}
            captureCanvasClick={this.props.captureCanvasClick}
            canvasWidth={this.props.canvasWidth}
            canvasHeight={this.props.canvasHeight}
          />
          <div className='tags'>
            {this.state.metaTagOutput}
          </div>
          <Button
            className='next-btn main-btn'
            onClick={() => {
              this.props.captureNextClick()
              this.resetActiveMetaTags()
            }}
            content='Next'
          />
        </div>
      </div>
    )
  }
}

export default LogPutt

LogPutt.propTypes = {
  /** List of putting meta tags for user to select */
  metaTagsList: PropTypes.array,
  /** When the user clicks a meta tag that tag value is stored so that it can be used/displayed in results */
  captureMetaTagClick: PropTypes.func,
  /** Clears all putts logged */
  captureResetClick: PropTypes.func,
  /** Indicates the current hole number the user is logging their putt */
  holeNum: PropTypes.number,
  /** Changes the mode to 'hit' and renders a green circle on the canvas */
  handleHitBtn: PropTypes.func,
  /** Changes the mode to 'miss' and renders a red star on the canvas */
  handleMissBtn: PropTypes.func,
  /** Stores the hit or miss string, which determines what shape to render */
  mode: PropTypes.string,
  /** x coordinate of the rendered shape. Default is in the center of the canvas. Updated based on user drag or click. */
  x: PropTypes.number,
  /** y coordinate of the rendered shape. Default is in the center of the canvas. Updated based on user drag or click. */
  y: PropTypes.number,
  /** Captures where the user last dragged the shape and updates the shape position */
  captureCanvasDrag: PropTypes.func,
  /** Captures where the user last clicked on the canvas and updates the shape position */
  captureCanvasClick: PropTypes.func,
  /** The width at which the canvas is rendered */
  canvasWidth: PropTypes.number,
  /** The height at which the canvas is rendered */
  canvasHeight: PropTypes.number,
  /** Stores the current putt information and renders a new session for the user to log another putt */
  captureNextClick: PropTypes.func
}
