import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="banner">
          <h1>Unveil the Mystery: Take Control of Your PCOS Journey</h1>
          <Link to={"/login"} className="button">Login</Link>
        </div>
        <div className='banner'>
          <img src="gyne-cancers-370x243_prev_ui.png" alt="logo" />
        </div>
      </section>
     
      <div className="slideshow">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
            <img src="1st.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="2nd.png" alt="Slide 1" />
          </div>
          <div>
            <img src="female facts and numbers.png" alt="Slide 1" />
          </div>
          <div>
            <img src="3.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="diff.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="hj.png" alt="Slide 3" />
          </div>
          <div>
            <img src="last.png" alt="Slide 4" />
          </div>

        </Carousel>
      </div>
    </>
  );
}

export default Hero;
