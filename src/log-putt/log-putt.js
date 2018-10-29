import React from 'react'
import { PuttInfo } from './putt-info/putt-info.js'
import { DisplayPutt } from './display-putt/display-putt.js'
import { Button } from '../button/button.js'
import { Link } from 'react-router-dom'
import './log-putt.css'

export const LogPutt = (props) => {
  return (
    <div className='log-putt'>
      <header className='page-header'>
        <h1 className="title">Log</h1>
        <div className='header-options'>
          <Button
            className='reset-all-btn'
            onClick={props.onClickReset}
            content='Reset All'
          />
          <Link to='/disc-golf-putting-logbook/results' className='get-results'>Results</Link>
        </div>
      </header>
      <hr className='divider'/>
      <div className='log-putt-controls'>
        <PuttInfo
          className='putt-info'
          holeNum={props.holeNum}
          handleHitBtn={props.handleHitBtn}
          handleMissBtn={props.handleMissBtn}
        />
        <DisplayPutt
          mode={props.mode}
          x={props.x}
          y={props.y}
          captureDrag={props.captureCanvasDrag}
          captureClick={props.captureCanvasClick}
          canvasWidth={props.canvasWidth}
          canvasHeight={props.canvasHeight}
        />
        <Button
          className='next-btn'
          onClick={props.onClickNext}
          content='Next'
        />
      </div>
    </div>
  )
}
