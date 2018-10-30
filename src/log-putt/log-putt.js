import React, { Component } from 'react'
import { PuttInfo } from './putt-info/putt-info.js'
import { DisplayPutt } from './display-putt/display-putt.js'
import { Button } from '../button/button.js'
import { Link } from 'react-router-dom'
import './log-putt.css'

class LogPutt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTagIndexList: [],
      metaTagOutput: this.props.metaTagsList.map( (tag, index) => {
        return(
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

    this.resetActiveMetaTags = this.resetActiveMetaTags.bind(this);
    this.activateMetaTags = this.activateMetaTags.bind(this);
    this.updateMetaTags = this.updateMetaTags.bind(this);
  }

  updateMetaTags(metaTagList, activeTagList) {
    const updatedMetaTagOutput = metaTagList.map( (tag, index) => {
        if (activeTagList.includes(index)){
          return(
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
          return(
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

  activateMetaTags(event) {
    const clickedTagIndex = this.state.metaTagOutput.findIndex( item => {
      return event.target.innerText === item.props.content
    })

    if(this.state.activeTagIndexList.includes(clickedTagIndex)){
      const updatedActiveTagIndexList = this.state.activeTagIndexList.filter( (item, index) => item !== clickedTagIndex)
      const updatedMetaTagOutput = this.updateMetaTags(this.props.metaTagsList, updatedActiveTagIndexList)
      this.setState({
        activeTagIndexList: this.state.activeTagIndexList.filter( (item, index) => item !== clickedTagIndex),
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

  resetActiveMetaTags(event) {
    const updatedMetaTagOutput = this.updateMetaTags(this.props.metaTagsList, [])

    this.setState({
      activeTagIndexList: [],
      metaTagOutput: updatedMetaTagOutput
    })
  }

  render() {
    return (
      <div className='log-putt'>
        <header className='page-header'>
          <h1 className="title">Log</h1>
          <div className='header-options'>
            <Button
              className='reset-all-btn'
              onClick={() => {
                this.props.onClickReset()
                this.resetActiveMetaTags()
              }}
              content='Reset All'
            />
            <Link to='/disc-golf-putting-logbook/results' className='get-results'>Results</Link>
          </div>
        </header>
        <hr className='divider'/>
        <div className='log-putt-controls'>
          <PuttInfo
            className='putt-info'
            holeNum={this.props.holeNum}
            handleHitBtn={this.props.handleHitBtn}
            handleMissBtn={this.props.handleMissBtn}
          />
          <DisplayPutt
            mode={this.props.mode}
            x={this.props.x}
            y={this.props.y}
            captureDrag={this.props.captureCanvasDrag}
            captureClick={this.props.captureCanvasClick}
            canvasWidth={this.props.canvasWidth}
            canvasHeight={this.props.canvasHeight}
          />
          <div className='tags'>
            {this.state.metaTagOutput}
          </div>
          <Button
            className='next-btn main-btn'
            onClick={ () => {
              this.props.onClickNext()
              this.resetActiveMetaTags()
            }}
            content='Next'
          />
        </div>
      </div>
    )
  }
}

export default LogPutt;
