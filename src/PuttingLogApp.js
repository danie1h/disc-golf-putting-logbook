import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Circle, Star } from 'react-konva'
import { Home } from './home/home.js'
import { About } from './about/about.js'
import { LogPutt } from './log-putt/log-putt.js'
import PuttResults from './results/results.js'
import { NoMatch } from './no-match/no-match.js'
import plLogo from './resources/images/pl-logo.png'
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
        <div className='putting-log-app'>
          <header className='header-container'>
            <div className='header-home'>
              <Link to='/disc-golf-putting-logbook/' className='header-logo'><img className='logo' src={plLogo} width='25' height='25' alt='logo' /></Link>
              <Link to='/disc-golf-putting-logbook/' className='header-title'>Putting Logbook</Link>
            </div>
            <nav className='header-nav'>
              <Link to='/disc-golf-putting-logbook/about' className='header-about'>About</Link>
              <Link to='/disc-golf-putting-logbook/log' className='header-log'>Log</Link>
              <Link to='/disc-golf-putting-logbook/results' className='header-results'>Results</Link>
            </nav>
          </header>

          <Switch>
            <Route exact path='/disc-golf-putting-logbook/' component={Home} />
            <Route exact path='/disc-golf-putting-logbook/about' component={About} />
            <Route
              path='/disc-golf-putting-logbook/log'
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
              path='/disc-golf-putting-logbook/results'
              render={props => <PuttResults {...props}
                puttLog={this.state.puttLog}
                canvasWidth={this.state.canvasWidth}
                canvasHeight={this.state.canvasHeight}
                puttCanvasShapes={this.state.puttCanvasShapes}
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
