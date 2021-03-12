import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Greetings!  My name is Troy Dorman, and I have been an avid computer programmer my whole life. Since purchasing our first Tandy 1000 at the age of nine and discovering QBasic, to my high school programming course in Pascal, to my self-taught fascination with Java and JavaScript over the past seven years, writing code is what I love to do.  But it wasn't until the past two years did I decide to get serious and go pro.

            I recently graduated in the top five percentile of the University of Minnesota's Full Stack Coding Bootcamp with an A+ average.  
            
            Now, I am a Full-Stack Web Developer, utilizing the MERN paradigm: MongoDB, Express, ReactJS and NodeJS to create responsive websites that are seemlessly integrated on all platforms, desktops and mobile devices.  Let me do this for you!

            Located in Boise, Idaho, I am ready to take on any project, big or small, utilizing the years of technological experience I have accrued.

            I am available right now to join your team and help build revolutionary platforms for your clients.  I am highly motivated, have a positive attitude, an unbridled passion for learning new technologies, and am extremely eager to show you what I can do!   

            

            
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
