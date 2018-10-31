import React from 'react'
import { Button } from '../../button/button.js'
import PropTypes from 'prop-types'
import './putt-info.css'

/**
 * Returns the content of hole information on the Log page
 * * hole information - hole number, hit or miss
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const PuttInfo = (props) => {
  return (
    <div className='putting-details'>
      <h2 className='putting-details-title'>Hole #{props.holeNum}</h2>
      <div className='hit-or-miss'>
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

PuttInfo.propTypes = {
  /** Indicates the current hole number the user is logging their putt */
  holeNum: PropTypes.number,
  /** Changes the mode to 'hit' and renders a green circle on the canvas */
  handleHitBtn: PropTypes.func,
  /** Changes the mode to 'miss' and renders a red star on the canvas */
  handleMissBtn: PropTypes.func
}
