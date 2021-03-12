import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - 2021</h3>
            <p>
              Completed University of Minnesota's Full-Slack Coding Bootcamp
              where I was introduced to the MERN paradigm. Continuing self
              teaching and introducing myself to new technologies while I search
              for a full-time gig as a programmer.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017 - 2019</h3>
            <p>
              Wrote first commercially-used piece of Java software to automate
              radio production entitled 'Night Show Producer', which was used
              on hundreds of radio stations on a daily basis.
              Input a PDF music log and the software would generate segmented
              audio blocks of radio programming which included music, disc
              jockey bits, commercials, and imaging. Check out the Github repo
              in the examples section!
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014 - 2017</h3>
            <p>
              Studies continued with learning Java through the University of
              Helsinki's online course with the ultimate goal of creating native
              Android applications.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011 - 2014</h3>
            <p>
              Started my journey with modern programming paradigms with
              self-taught JavaScript online courses and personal projects.
              Created dynamic MYSQL database for work with an interactive UI to
              listen to, rate, comment, and add metadata tags to our audio
              library of comedy bits for the radio.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1997 - 2010</h3>
            <p>
              Full time audio engineer for various radio stations across the
              country, producing commercials and imaging. Highly technical
              positions responsible for maintaining, administering, and securing
              broadcast servers and curating content databases. Work with
              clients to create regional marketing audio commercial campaigns.{" "}
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1987 - 1997</h3>
            <p>
              Began experimenting with QBasic as a child, and later on Pascal in
              high school. Also started utilizing Linux as a primary operating
              system around this time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
