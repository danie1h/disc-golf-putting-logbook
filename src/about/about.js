import React from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact'
import { AboutGIFCarousel } from './about-gif-carousel.js'

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
              <p>In the sport of <a className='text-default' href='https://www.pdga.com/introduction' target='_blank' rel='noopener noreferrer'>Disc Golf</a>, putting is an essential aspect and, arguably, one of the greatest challenges in a round. It's not uncommon for players to frequently miss their mark of the basket. If you're like me, you may even have those nervous putt jitters that can impact the rest of the round. Consistency is key, and this project will enable disc golfers to track their putting consistency. By identifying patterns, players will have the ability to leverage their stats to make the necessary modifications that will make them a better putter and, in turn, an improved player. Cue the Putting Logbook.</p>
            </div>
          </div>
          <div className='row mt-3 mb-5'>
            <div className='col'>
              <AboutGIFCarousel />
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-3'>
          <div className='row'>
            <div className='col'>
              <h2 className='blue-grey-text text-left h3-responsive'>Related Disc Golf Readings</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr className='my-2' />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col px-4'>
              <ListGroup>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://www.innovadiscs.com/home/disc-golf-faq/glossary-of-terms/' target='_blank' rel='noopener noreferrer'>
                  <img className='pr-2' src='https://res.cloudinary.com/joeschmoe1/image/upload/f_auto,q_auto/v1541266607/putting-logbook/lingo-icon.png' alt='lingo icon' height='20' />
                  Lingo
                </ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://allthingsdiscgolf.com/two-disc-golf-putting-tips-focus-simulation/' target='_blank' rel='noopener noreferrer'>
                  <img className='pr-2' src='https://res.cloudinary.com/joeschmoe1/image/upload/f_auto,q_auto/v1541266607/putting-logbook/tips-icon.png' alt='tips icon' height='20' />
                  Tips
                </ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://mainediscgolf.com/greenhorn/simple-putting-drill/' target='_blank' rel='noopener noreferrer'>
                  <img className='pr-2' src='https://res.cloudinary.com/joeschmoe1/image/upload/f_auto,q_auto/v1541266607/putting-logbook/drill-icon.png' alt='drill icon' height='20' />
                  Drills
                </ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center' hover href='https://dgputtheads.com/disc-golf-putting-games' target='_blank' rel='noopener noreferrer'>
                  <img className='pr-2' src='https://res.cloudinary.com/joeschmoe1/image/upload/f_auto,q_auto/v1541266607/putting-logbook/game-icon.png' alt='game icon' height='20' />
                  Games
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h2 className='blue-grey-text text-left h3-responsive'>Upcoming Features</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr className='my-2' />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col px-4'>
              <ListGroup>
                <ListGroupItem className='list-group-item text-default text-center'>
                  <i className='fa fa-line-chart pr-2' aria-hidden='true' />
                  More Charts!
                </ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center'>
                  <i className='fa fa-user-circle pr-2' style={{ color: '#fbc02d' }} aria-hidden='true' />
                  User Accounts!
                </ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center'>
                  <i className='fa fa-rocket pr-2' style={{ color: '#FF8800' }} aria-hidden='true' />
                  Site Migration!
                </ListGroupItem>
                <ListGroupItem className='list-group-item text-default text-center'>
                  <i className='fa fa-eye pr-2' style={{ color: '#43a047' }} aria-hidden='true' />
                  Aestheic Tweaks!
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h2 className='blue-grey-text text-left h3-responsive'>Get Involved</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr className='my-2' />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col px-4 text-center'>
              <a className='btn btn-sm btn-default waves-effect waves-light' href='mailto:dhumphreys.co@mail.com'><i className='fa fa-envelope-open-o pr-2' aria-hidden='true' />Contact</a>
              <a className='btn btn-sm btn-default waves-effect waves-light' href='https://github.com/danie1h/putting-logbook' target='_blank' rel='noopener noreferrer'><i className='fa fa-code-fork pr-2' style={{ color: '#e0e0e0' }} aria-hidden='true' />Contribute</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
