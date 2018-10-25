import React, { Component } from 'react'
import { Circle, Star } from 'react-konva'
import { PuttInfo } from './putt-info/putt-info.js'
import DisplayPutt from './display-putt/display-putt.js'
import { SavePutt } from './save-putt/save-putt.js'
import PuttOverview from './putt-overview/putt-overview.js'
import { ResetBtn } from './reset-btn/reset-btn.js'
import './PuttingLogApp.css'

class PuttingLogApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      previousPutt: [],
      previousPuttOutput: [],
      holeNum: 1,
      mode: '',
      canvasWidth: 300,
      canvasHeight: 300,
      shapeXCoordinate: 300 / 2,
      shapeYCoordinate: 300 / 2
    }

    this.handleHitBtn = this.handleHitBtn.bind(this)
    this.handleMissBtn = this.handleMissBtn.bind(this)
    this.captureCanvasClick = this.captureCanvasClick.bind(this)
    this.captureCanvasDrag = this.captureCanvasDrag.bind(this)
    this.captureNextClick = this.captureNextClick.bind(this)
    this.captureOverviewClick = this.captureOverviewClick.bind(this)
    this.captureResetClick = this.captureResetClick.bind(this)
  }

  handleHitBtn() {
    this.setState({
      mode: 'hit',
    })
  }

  handleMissBtn() {
    this.setState({
      mode: 'miss',
    })
  }

  captureCanvasClick(event) {
    let canvasOffsetLeft = document.getElementsByClassName('konvajs-content')[0].offsetLeft
    let canvasOffsetTop = document.getElementsByClassName('konvajs-content')[0].offsetTop

    this.setState({
      shapeXCoordinate: event.clientX - canvasOffsetLeft,
      shapeYCoordinate: event.pageY - canvasOffsetTop,
    })
  }

  captureCanvasDrag(event) {
    this.setState({
      shapeXCoordinate: event.target.x(),
      shapeYCoordinate: event.target.y()
    })
  }

  captureNextClick() {
    this.setState({
      previousPutt: [...this.state.previousPutt, {
        holeNum: this.state.holeNum,
        mode: this.state.mode,
        shapeXCoordinate: this.state.shapeXCoordinate,
        shapeYCoordinate: this.state.shapeYCoordinate
      }],
      holeNum: this.state.holeNum + 1,
      mode: '',
      shapeXCoordinate: 300 / 2,
      shapeYCoordinate: 300 / 2
    })
  }

  captureOverviewClick() {
    let previousPuttJSX = this.state.previousPutt.map( putt => {
      if (putt.mode === "hit") {
        return <Circle key={putt.holeNum} x={putt.shapeXCoordinate} y={putt.shapeYCoordinate} radius={20} fill="green" />
      } else { // putt.mode === "miss"
        return <Star key={putt.holeNum} x={putt.shapeXCoordinate} y={putt.shapeYCoordinate} numPoints={7} innerRadius={10} outerRadius={20} fill="red" />
      }
    })

    this.setState({
      previousPuttOutput: previousPuttJSX
    })
  }

  captureResetClick() {
    this.setState({
      previousPutt: [],
      previousPuttOutput: [],
      holeNum: 1,
      mode: '',
      shapeXCoordinate: 300 / 2,
      shapeYCoordinate: 300 / 2
    })
  }


  render() {
    return (
      <div className='putting-log-app'>
        <header className='App-header'>
          <h1>Putting Logbook</h1>
        </header>
        <div className='main'>
          <div className="master-controls">
            <PuttOverview
              captureClick={this.captureOverviewClick}
            />
            <ResetBtn
              captureClick={this.captureResetClick}
            />
          </div>
          <PuttInfo
            holeNum={this.state.holeNum}
            handleHitBtn={this.handleHitBtn}
            handleMissBtn={this.handleMissBtn}
          />
          <DisplayPutt
            mode={this.state.mode}
            x={this.state.shapeXCoordinate}
            y={this.state.shapeYCoordinate}
            captureDrag={this.captureCanvasDrag}
            captureClick={this.captureCanvasClick}
            canvasWidth={this.state.canvasWidth}
            canvasHeight={this.state.canvasHeight}
            previousPuttOutput={this.state.previousPuttOutput}
          />
          <SavePutt
            captureClick={this.captureNextClick}
          />
        </div>
      </div>
    )
  }
}

export default PuttingLogApp
