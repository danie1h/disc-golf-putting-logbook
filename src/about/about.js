import React from 'react'
import './about.css'

export const About = () => {
  return(
    <article className='about'>
      <h1 className='title'>About the Putting Logbook</h1>
      <p className='description'>In the sport of <a href='https://www.pdga.com/introduction'>Disc Golf</a>, putting is an essential aspect and, arguably, one of the greatest challenges in a round. It's not uncommon for players to frequently miss their mark of the basket. Consistency is key, and this project will enable disc golfers to track their putting consistency. By identifying patterns, players will have the ability to leverage their stats to make the necessary modifications that will make them a better putter and, in turn, an improved player. Cue the Putting Logbook.</p>
      <section className="resources">
        <h2 className="resources-title">Additional Disc Golf Related Readings</h2>
        <ul>
          <li><a href='https://www.innovadiscs.com/home/disc-golf-faq/glossary-of-terms/'>Lingo</a></li>
          <li><a href='https://allthingsdiscgolf.com/two-disc-golf-putting-tips-focus-simulation/'>Tips</a></li>
          <li><a href='https://mainediscgolf.com/greenhorn/simple-putting-drill/'>Drills</a></li>
          <li><a href='https://dgputtheads.com/disc-golf-putting-games'>Games</a></li>
        </ul>
      </section>
    </article>
  )
}
