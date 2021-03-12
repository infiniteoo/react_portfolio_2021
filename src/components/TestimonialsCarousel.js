import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      <>
        <img src={avatar1} alt="Chase Wilkins" />
        <div className="myCarousel">
          <h3>Chase Wilkins</h3>
          <p>Troy's website design far exceeded my expectations. The end product is a beautiful website that personifies who we are as business.</p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Chandra Sutton" />
        <div className="myCarousel">
          <h3>Chandra Sutton</h3>
          <p>My new site created by Troy just launched. He's done a great job of creating exactly what I wanted. Easy to work with and very responsive. He met all of my expectations and had a lot of insight.</p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Wilson Sandaval" />
        <div className="myCarousel">
          <h3>Wilson Sandaval</h3>
          <p>I would highly recommend Troy. He's great to work with. The traffic to our website has increased thanks to his SEO optimization.</p>
        </div>
      </>
      <>
        <img src={avatar4} alt="Mike Stevenson" />
        <div className="myCarousel">
          <h3>Mike Stevenson</h3>
          <p>We were very impressed with the all aspects of our new website. We would highly reccomend Troy to anyone looking to build a new website.</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel;
