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
    <div className='home'>
      <h1 className='title'>Disc Golf Putting Logbook</h1>
      <h2 className='description'>Log Putts, View Stats, Improve Your Game, Repeat</h2>
      <div className='home-link-items'>
        <Link to={process.env.PUBLIC_URL + '/about'} id='learn-more' className='home-link'>Learn More</Link>
        <Link to={process.env.PUBLIC_URL + '/log'} id='get-started' className='home-link'>Get Started</Link>
      </div>
    </div>
  )
}
