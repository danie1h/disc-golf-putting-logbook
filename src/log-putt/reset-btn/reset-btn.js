import React from 'react'
import './reset-btn.css'

export const ResetBtn = (props) => {
  return (
    <div className="reset-btn">
      <button className="reset" type="submit" onClick={props.captureClick}>Reset</button>
    </div>
  )
}
