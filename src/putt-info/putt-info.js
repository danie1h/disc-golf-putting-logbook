import React from 'react'
import './putt-info.css'

export const PuttInfo = (props) => {
    return(
      <div className="putting-details">
        <h2 className="putting-details-title">Hole #{props.holeNum}</h2>
        <div className="hit-or-miss">
          <button className="hit" onClick={props.handleHitBtn}>Hit</button>
          <button className="miss" onClick={props.handleMissBtn}>Miss</button>
        </div>
      </div>
    )
}
