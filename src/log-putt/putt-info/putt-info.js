import React from 'react'
import { Button } from '../../button/button.js'
import './putt-info.css'

export const PuttInfo = (props) => {
    return(
      <div className="putting-details">
        <h2 className="putting-details-title">Hole #{props.holeNum}</h2>
        <div className="hit-or-miss">
          <Button
            className='hit-btn main-btn'
            onClick={props.handleHitBtn}
            content='Hit'
          />
          <Button
            className='miss-btn main-btn'
            onClick={props.handleMissBtn}
            content='Miss'
          />
        </div>
      </div>
    )
}
