import React from 'react'
import './save-putt.css'

export const SavePutt = (props) => {
  return (
    <div className="save-putt">
      <button className="save" type="submit" onClick={props.captureClick}>Next</button>
    </div>
  )
}
