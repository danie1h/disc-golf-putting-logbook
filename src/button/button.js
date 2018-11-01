import React from 'react'
import PropTypes from 'prop-types'

/**
 * Returns a button based on the provided property parameters
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.content}</button>
  )
}

Button.propTypes = {
  /** The value assigned as the button className */
  className: PropTypes.string,
  /** The function to call when the button is clicked */
  onClick: PropTypes.func,
  /** The innerHTML for the button */
  content: PropTypes.string
}
