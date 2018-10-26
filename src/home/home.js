import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export const Home = () => {
  return(
    <div className="home">
      <h1 className="title">Disc Golf Putting Logbook</h1>
      <h2 className="description">Log Putts, View Stats, Learn and Improve, Repeat</h2>
      <Link to='/disc-golf-putting-logbook/log' className='get-started'>Get Started</Link>
    </div>
  )
}
