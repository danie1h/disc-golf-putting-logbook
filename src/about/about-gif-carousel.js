import React from 'react'
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from 'mdbreact'
import testGIF from '../resources/images/14-ggp-putt.GIF'

/**
 * Returns a carousel of putting gifs for the About page
 *
 * @version 0.1.0
 * @author [danie1h](https://github.com/danie1h)
 */
export const AboutGIFCarousel = () => {
  return (
    <div>
      <Carousel
        activeItem={1}
        length={1}
        showControls={false}
        showIndicators={false}
        className='z-depth-1'
      >
        <CarouselInner>
          <CarouselItem itemId='1'>
            <View>
              <img className='d-block w-100' src={testGIF} alt='putting gif' />
              <Mask overlay='stylish-slight' />
            </View>
            <CarouselCaption>
              <h3 className='h3-responsive'>Hole 14 @ Golden Gate Park</h3>
              <p>San Francisco, CA</p>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    </div>
  )
}
