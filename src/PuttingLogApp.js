import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Circle, Star } from 'react-konva'
import { Home } from './home/home.js'
import { LogPutt } from './log-putt/log-putt.js'
import PuttOverview from './overview/overview.js'
import { NoMatch } from './no-match/no-match.js'
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
    let puttCanvasShapesJSX = (this.state.mode === 'hit') ?
      <Circle
        key={this.state.holeNum}
        x={this.state.shapeXCoordinate}
        y={this.state.shapeYCoordinate}
        radius={20}
        fill='green'
        stroke='black'
      />
      :
      <Star
        key={this.state.holeNum}
        x={this.state.shapeXCoordinate}
        y={this.state.shapeYCoordinate}
        numPoints={7}
        innerRadius={10}
        outerRadius={20}
        fill='red'
        stroke='black'
      />


    this.setState({
      puttLog: [...this.state.puttLog, {
        holeNum: this.state.holeNum,
        mode: this.state.mode,
        shapeXCoordinate: this.state.shapeXCoordinate,
        shapeYCoordinate: this.state.shapeYCoordinate
      }],
      puttCanvasShapes: [...this.state.puttCanvasShapes, puttCanvasShapesJSX],
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
    return(
      <Router>
        <div className="putting-log-app">
          <header className='header-container'>
            <Link to='/disc-golf-putting-logbook/' className='header-title'>Putting Logbook</Link>
            <nav className='header-nav'>
              <Link to='/disc-golf-putting-logbook/log' className='header-log'>Log</Link>
              <Link to='/disc-golf-putting-logbook/overview' className='header-overview'>Overview</Link>
            </nav>
          </header>

          <Switch>
            <Route exact path="/disc-golf-putting-logbook/" component={Home} />
            <Route
              path="/disc-golf-putting-logbook/log"
              render={props => <LogPutt {...props}
                holeNum={this.state.holeNum}
                handleHitBtn={this.handleHitBtn}
                handleMissBtn={this.handleMissBtn}
                mode={this.state.mode}
                x={this.state.shapeXCoordinate}
                y={this.state.shapeYCoordinate}
                captureCanvasDrag={this.captureCanvasDrag}
                captureCanvasClick={this.captureCanvasClick}
                canvasWidth={this.state.canvasWidth}
                canvasHeight={this.state.canvasHeight}
                onClickNext={this.captureNextClick}
                onClickReset={this.captureResetClick}
              />}
            />
            <Route
              path="/disc-golf-putting-logbook/overview"
              render={props => <PuttOverview {...props}
                puttLog={this.state.puttLog}
              />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default PuttingLogApp
