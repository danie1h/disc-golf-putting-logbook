import React from 'react'
import { Link } from 'react-router-dom'
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
    <div id='home' className='container-fluid d-flex justify-content-center align-items-center'>
      <div id='home-overlay' className='pattern-1' />
      <div id='home-content' className='animated fadeInUp fast d-flex flex-column align-items-center'>
        <h1 className='app-title white-text'>Disc Golf Putting Logbook</h1>
        <h2 className='app-secondary-title'>Log Putts, View Stats, Improve Your Game, Repeat</h2>
        <div>
          <Link to={process.env.PUBLIC_URL + '/about'} className='btn btn-default Ripple-parent'>Learn More</Link>
          <Link to={process.env.PUBLIC_URL + '/log'} className='btn btn-default Ripple-parent'>Get Started</Link>
        </div>
      </div>
    </div>
  )
}
