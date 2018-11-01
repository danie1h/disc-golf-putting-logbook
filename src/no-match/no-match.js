import React from 'react'

/**
 * Returns a page with a 404 error if the user navigates to an invalid path
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const NoMatch = () => {
  return (
    <div id='no-match' className='container-fluid mt-4 px-5 animated fadeInLeft fast'>
      <h1 id='no-match-title' className='text-center'>404 Error: Page Not Found</h1>
    </div>
  )
}
