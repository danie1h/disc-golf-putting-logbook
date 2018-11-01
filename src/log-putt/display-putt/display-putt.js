import React from 'react'
import { Stage, Layer, Circle, Star, Line } from 'react-konva'
import PropTypes from 'prop-types'
import './display-putt.css'

/**
 * Returns the content of canvas on the Log page
 * * disc golf basket canvas
 * * ability for users to click or drag the location of the hit or miss
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const DisplayPutt = (props) => {
  let shape = (props.mode === 'hit')
    ? <Circle x={props.x} y={props.y} radius={20} fill='green' draggable onDragEnd={props.captureCanvasDrag} />
    : (props.mode === 'miss')
      ? <Star x={props.x} y={props.y} numPoints={7} innerRadius={10} outerRadius={20} fill='red' draggable onDragEnd={props.captureCanvasDrag} />
      : <Line />

  return (
    <div className='canvas-container m-2' onClick={props.captureCanvasClick}>
      <Stage width={props.canvasWidth} height={props.canvasHeight}>
        <Layer>
          {shape}
        </Layer>
      </Stage>
    </div>
  )
}

DisplayPutt.propTypes = {
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
  canvasHeight: PropTypes.number
}
