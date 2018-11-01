import React from 'react'
import { Button } from '../../button/button.js'
import PropTypes from 'prop-types'

/**
 * Returns the content of hole information on the Log page
 * * hole information - hole number, hit or miss
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const PuttInfo = (props) => {
  return (
    <div id='putting-info'>
      <div className='row'>
        <div className='col'>
          <h2 id='putting-info-title' className='h3-responsive text-center blue-grey-text'>Hole #{props.holeNum}</h2>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col'>
          <Button
            className='hit-btn btn btn-default'
            onClick={props.handleHitBtn}
            content='Hit'
          />
          <Button
            className='miss-btn btn btn-default'
            onClick={props.handleMissBtn}
            content='Miss'
          />
        </div>
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
