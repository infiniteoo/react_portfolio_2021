import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faDesktop, faFileCode, faMusic } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Design</h3>
              <p>Before a single line of code is written, I'll meticulously assemble and strategize the optimal technologies and hardware requirements for your project. </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Utilizing the latest technologies, I'll build a seamlessly integrated multi-platform website that'll look great on your desktop or a smartphone.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faMusic} size="2x" /></div>

              <h3>Audio Production</h3>
              <p>From Podcast production and editing, to radio commericals and imaging, I bring 20+ years of experience as an audio engineer.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCamera} size="2x" /></div>

              <h3>Photography</h3>
              <p>From weddings, to sporting events, to concerts and community events, I can document any occasion with the highest quality and latest DSLR technology and lenses.</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
