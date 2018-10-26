import React from 'react'
import { Stage, Layer, Circle, Star, Line } from 'react-konva'
import './display-putt.css'

export const DisplayPutt = (props) => {
    let shape = (props.mode === "hit") ?
        <Circle x={props.x} y={props.y} radius={20} fill="green" draggable onDragEnd={props.captureDrag} />
      : (props.mode === "miss") ?
        <Star x={props.x} y={props.y} numPoints={7} innerRadius={10} outerRadius={20} fill="red" draggable onDragEnd={props.captureDrag} />
      :
        <Line />

    return (
      <div className="track-putt">
        <div className="canvas-container" onClick={props.captureClick}>
          <Stage width={props.canvasWidth} height={props.canvasHeight}>
            <Layer>
              {shape}
            </Layer>
          </Stage>
        </div>
      </div>
    )
}
