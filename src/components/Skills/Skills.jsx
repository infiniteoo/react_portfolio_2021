import React from "react";

const Skills = () => {
  return (
    <div className="row" id="barsrow">
      <div className="col-md-6">
        <p className="text-light font-weight-500 text-left mb-2">
          JavaScript <span className="float-right">80%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '80%'}}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-light font-weight-500 text-left mb-2">
          Java <span className="float-right">45%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '45%'}}
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-light font-weight-500 text-left mb-2">
          HTML/CSS <span className="float-right">85%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '85%'}}
           
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <p className="text-light font-weight-500 text-left mb-2">
          Linux Administration <span className="float-right">55%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '55%'}}
           
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-md-6">
        <p className="text-light font-weight-500 text-left mb-2">
          Node.js <span className="float-right">65%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '65%'}}
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-light font-weight-500 text-left mb-2">
          Go <span className="float-right">25%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '25%'}}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-light font-weight-500 text-left mb-2">
          Bootstrap <span className="float-right">85%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '85%'}}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-light font-weight-500 text-left mb-2">
          MySQL / NoSQL <span className="float-right">50%</span>
        </p>
        <div className="progress progress-sm mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '50%'}}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
