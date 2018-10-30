import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Circle, Star } from 'react-konva'
import { Home } from './home/home.js'
import { About } from './about/about.js'
import LogPutt from './log-putt/log-putt.js'
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
      canvasWidth: 300,
      canvasHeight: 300,
      shapeXCoordinate: 300 / 2,
      shapeYCoordinate: 300 / 2,
      activeMetaTags: []
    }

    this.handleHitBtn = this.handleHitBtn.bind(this)
    this.handleMissBtn = this.handleMissBtn.bind(this)
    this.captureCanvasClick = this.captureCanvasClick.bind(this)
    this.captureCanvasDrag = this.captureCanvasDrag.bind(this)
    this.captureNextClick = this.captureNextClick.bind(this)
    this.captureMetaTagClick = this.captureMetaTagClick.bind(this)
    this.captureResetClick = this.captureResetClick.bind(this)
  }

  handleHitBtn() {
    this.setState({
      mode: 'hit'
    })
  }

  handleMissBtn() {
    this.setState({
      mode: 'miss'
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
    function getPosition(width, height, xCoordinate, yCoordinate, rangePercentage) {
      let widthCenter = width / 2;
      let heightCenter = height / 2;
      let giveAmount = widthCenter * rangePercentage;
      let positionDescription = {
        x: '',
        y: ''
      };

      ( xCoordinate < widthCenter - giveAmount ) ?
        positionDescription.x = 'left'
      : ( xCoordinate > widthCenter + giveAmount ) ?
        positionDescription.x = 'right'
      :
        positionDescription.x = 'center';

      ( yCoordinate < heightCenter - giveAmount ) ?
        positionDescription.y = 'high'
      : ( yCoordinate > heightCenter + giveAmount ) ?
        positionDescription.y = 'low'
      :
        positionDescription.y = 'center';

      return positionDescription;
    }

    let positionDetails = getPosition(this.state.canvasWidth, this.state.canvasHeight, this.state.shapeXCoordinate, this.state.shapeYCoordinate, .1)

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
        shapeYCoordinate: this.state.shapeYCoordinate,
        shapeXPosition: positionDetails.x,
        shapeYPosition: positionDetails.y,
        activeMetaTags: this.state.activeMetaTags
      }],
      puttCanvasShapes: [...this.state.puttCanvasShapes, puttCanvasShapesJSX],
      holeNum: this.state.holeNum + 1,
      mode: '',
      shapeXCoordinate: 300 / 2,
      shapeYCoordinate: 300 / 2,
      activeMetaTags: []
    })
  }

  captureMetaTagClick(event) {
    if (/active/.test(event.target.className)) {
      this.setState({
        activeMetaTags: this.state.activeMetaTags.filter( tag => tag !== event.target.innerText)
      })
    } else {
      this.setState({
        activeMetaTags: [...this.state.activeMetaTags, event.target.innerText]
      })
    }
  }

  captureResetClick() {
    this.setState({
      puttLog: [],
      puttCanvasShapes: [],
      holeNum: 1,
      mode: '',
      shapeXCoordinate: 300 / 2,
      shapeYCoordinate: 300 / 2,
      activeMetaTags: []
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
                captureMetaTagClick={this.captureMetaTagClick}
                metaTagsList={this.props.metaTagsList}
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
