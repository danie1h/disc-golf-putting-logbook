import React from 'react'
import './about.css'

/**
 * Returns the content of the About page
 * * An overview of disc golf and the value of the Putting Logbook
 * * Additional disc golf resources
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const About = () => {
  return (
    <article id='about'>
      <header className='page-header'>
        <h1 className='title'>About the Putting Logbook</h1>
      </header>
      <hr className='divider' />
      <section id='overview'>
        <p className='description'>In the sport of <a href='https://www.pdga.com/introduction' target='_blank' rel='noopener noreferrer'>Disc Golf</a>, putting is an essential aspect and, arguably, one of the greatest challenges in a round. It's not uncommon for players to frequently miss their mark of the basket. Consistency is key, and this project will enable disc golfers to track their putting consistency. By identifying patterns, players will have the ability to leverage their stats to make the necessary modifications that will make them a better putter and, in turn, an improved player. Cue the Putting Logbook.</p>
      </section>
      <section id='resources'>
        <header className='page-header'>
          <h2 className='secondary-title' id='resources-title'>Related Disc Golf Readings</h2>
        </header>
        <hr className='divider' />
        <ul id='resource-list'>
          <li><a href='https://www.innovadiscs.com/home/disc-golf-faq/glossary-of-terms/' target='_blank' rel='noopener noreferrer'>Lingo</a></li>
          <li><a href='https://allthingsdiscgolf.com/two-disc-golf-putting-tips-focus-simulation/' target='_blank' rel='noopener noreferrer'>Tips</a></li>
          <li><a href='https://mainediscgolf.com/greenhorn/simple-putting-drill/' target='_blank' rel='noopener noreferrer'>Drills</a></li>
          <li><a href='https://dgputtheads.com/disc-golf-putting-games' target='_blank' rel='noopener noreferrer'>Games</a></li>
        </ul>
      </section>
    </article>
  )
}
