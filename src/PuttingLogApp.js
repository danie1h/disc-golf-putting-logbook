import React, { Component } from 'react'
import { Circle, Star } from 'react-konva'
import { PuttInfo } from './putt-info/putt-info.js'
import { DisplayPutt } from './display-putt/display-putt.js'
import { Button } from './button/button.js'
import './PuttingLogApp.css'

class PuttingLogApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      puttLog: [],
      puttCanvasShapes: [],
      holeNum: 1,
      mode: '',
      locale: '',
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
      puttLog: [...this.state.puttLog, {
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
    let puttCanvasShapesJSX = this.state.puttLog.map( putt => {
      if (putt.mode === 'hit') {
        return <Circle key={putt.holeNum} x={putt.shapeXCoordinate} y={putt.shapeYCoordinate} radius={20} fill='green' stroke='black' />
      } else { // putt.mode === 'miss'
        return <Star key={putt.holeNum} x={putt.shapeXCoordinate} y={putt.shapeYCoordinate} numPoints={7} innerRadius={10} outerRadius={20} fill='red' stroke='black'/>
      }
    })

    this.setState({
      puttCanvasShapes: puttCanvasShapesJSX
    })
  }

  captureResetClick() {
    this.setState({
      puttLog: [],
      puttCanvasShapes: [],
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
          <div className='master-controls'>
            <Button
              className='overview-btn'
              onClick={this.captureOverviewClick}
              content='Overview'
            />
            <Button
              className='reset-btn'
              onClick={this.captureResetClick}
              content='Reset'
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
            puttCanvasShapes={this.state.puttCanvasShapes}
          />
          <Button
            className='next-btn'
            onClick={this.captureNextClick}
            content='Next'
          />
        </div>
      </div>
    )
  }
}

export default PuttingLogApp
