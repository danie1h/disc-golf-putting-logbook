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
    <div className='no-match'>
      <h1 className='title'>404 Error: Page Not Found</h1>
    </div>
  )
}
