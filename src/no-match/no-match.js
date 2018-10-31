import React from 'react'
import './no-match.css'

/**
 * Returns a page with a 404 error if the user navigates to an invalid path
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const NoMatch = () => {
  return (
    <div id='no-match-container'>
      <h1 id='no-match-title'>404 Error: Page Not Found</h1>
    </div>
  )
}
