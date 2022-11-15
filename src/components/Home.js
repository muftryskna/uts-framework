import React from 'react'
import { Carousel } from 'react-bootstrap';
import thor2 from '../assets/images/top/thor2.jpg';
import avatar from '../assets/images/top/avatar.jpg';
import bp from '../assets/images/top/bp.jpg';
import About from './about';
import Trending from './Trending';
import Contact from './contact';

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thor2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TOP 1</h3>
            <p>THOR: LOVE AND THUNDER</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bp}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>TOP 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={avatar}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>TOP 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default Home

