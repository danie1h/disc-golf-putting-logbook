import React from 'react'
import { PuttInfo } from './putt-info/putt-info.js'
import { DisplayPutt } from './display-putt/display-putt.js'
import { Button } from '../button/button.js'
import './log-putt.css'

export const LogPutt = (props) => {
  return (
    <div className='log-putt'>
      <PuttInfo
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
      <div className='master-controls'>
        <Button
          className='reset-all-btn'
          onClick={props.onClickReset}
          content='Reset All'
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
