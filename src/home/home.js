import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export const Home = () => {
  return(
    <div className='home'>
      <h1 className='title'>Disc Golf Putting Logbook</h1>
      <h2 className='description'>Log Putts, View Stats, Learn and Improve, Repeat</h2>
      <div className='home-link-items'>
        <Link to='/disc-golf-putting-logbook/log' id='get-started' className='home-link'>Get Started</Link>
        <Link to='/disc-golf-putting-logbook/about' id='learn-more' className='home-link'>Learn More</Link>
      </div>
    </div>
  )
}
