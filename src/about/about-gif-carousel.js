import React from 'react'
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View } from 'mdbreact'

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
              <video className='d-block w-100' autoPlay loop>
                <source src='https://res.cloudinary.com/joeschmoe1/video/upload/e_overlay,f_auto,q_auto/v1541267299/putting-logbook/14-ggp-putt.mp4' type='video/mp4' />
              </video>
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
