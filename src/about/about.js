import React from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact'
import { AboutGIFCarousel } from './about-gif-carousel.js'
import lingoIcon from '../resources/images/lingo-icon.png'
import tipsIcon from '../resources/images/tips-icon.png'
import drillIcon from '../resources/images/drill-icon.png'
import gameIcon from '../resources/images/game-icon.png'

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
    <div id='about' className='container-fluid mt-4 px-5 animated fadeInLeft fast'>
      <div className='row'>
        <div className='col'>
          <header>
            <h1 className='blue-grey-text h1-responsive'>About</h1>
          </header>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col'>
          <hr className='my-2' />
        </div>
      </div>
      <div className='row my-1'>
        <div className='col-md-8 text-justify px-4'>
          <div className='row'>
            <div className='col'>
              <p>In the sport of <a className='text-default' href='https://www.pdga.com/introduction' target='_blank' rel='noopener noreferrer'>Disc Golf</a>, putting is an essential aspect and, arguably, one of the greatest challenges in a round. It's not uncommon for players to frequently miss their mark of the basket. Consistency is key, and this project will enable disc golfers to track their putting consistency. By identifying patterns, players will have the ability to leverage their stats to make the necessary modifications that will make them a better putter and, in turn, an improved player. Cue the Putting Logbook.</p>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col'>
              <AboutGIFCarousel />
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-3'>
          <div className='row'>
            <div className='col'>
              <h2 className='blue-grey-text text-center h3-responsive'>Related Disc Golf Readings</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr className='my-2' />
            </div>
          </div>
          <div className='row'>
            <div className='col px-4'>
              <ListGroup>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://www.innovadiscs.com/home/disc-golf-faq/glossary-of-terms/' target='_blank' rel='noopener noreferrer'><img className='pr-2' src={lingoIcon} alt='lingo icon' height='20' />Lingo</ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://allthingsdiscgolf.com/two-disc-golf-putting-tips-focus-simulation/' target='_blank' rel='noopener noreferrer'><img className='pr-2' src={tipsIcon} alt='tips icon' height='20' />Tips</ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://mainediscgolf.com/greenhorn/simple-putting-drill/' target='_blank' rel='noopener noreferrer'><img className='pr-2' src={drillIcon} alt='drill icon' height='20' />Drills</ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://dgputtheads.com/disc-golf-putting-games' target='_blank' rel='noopener noreferrer'><img className='pr-2' src={gameIcon} alt='game icon' height='20' />Games</ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
