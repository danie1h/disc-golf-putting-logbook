import React, { Component } from 'react'
import { Stage, Layer, Circle, Star, Line } from 'react-konva'
import './display-putt.css'

class DisplayPutt extends Component {
  render() {
    let shape = (this.props.previousPuttOutput.length !== 0) ?
        this.props.previousPuttOutput
      : (this.props.mode === "hit") ?
        <Circle x={this.props.x} y={this.props.y} radius={20} fill="green" draggable onDragEnd={this.props.captureDrag} />
      : (this.props.mode === "miss") ?
        <Star x={this.props.x} y={this.props.y} numPoints={7} innerRadius={10} outerRadius={20} fill="red" draggable onDragEnd={this.props.captureDrag} />
      :
        <Line />

    return (
      <div className="track-putt">
        <div className="canvas-container" onClick={this.props.captureClick}>
          <Stage width={this.props.canvasWidth} height={this.props.canvasHeight}>
            <Layer>
              {shape}
            </Layer>
          </Stage>
        </div>
      </div>
    )
  }

}

export default DisplayPutt
