import React from 'react'
import { Button } from 'mdbreact'
import './home.css'

/**
 * Returns the content of the Home page
 * * A title and slogan
 * * Links to the log putt page via Get Started button and about page via Learn More button
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const Home = () => {
  return (
    <div id='home' className='container-fluid mt-4 d-flex flex-column align-items-center animated zoomIn fast'>
      <h1 className='app-title blue-grey-text'>Disc Golf Putting Logbook</h1>
      <h2 className='app-secondary-title grey-text'>Log Putts, View Stats, Improve Your Game, Repeat</h2>
      <div>
        <Button href={process.env.PUBLIC_URL + '/#/about'}>Learn More</Button>
        <Button href={process.env.PUBLIC_URL + '/#/log'}>Get Started</Button>
      </div>
    </div>
  )
}
