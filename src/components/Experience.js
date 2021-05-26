import React from "react";

const Experience = () => {
  return (
    <div className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Experience</h1>
        </div>
        <div className="container experience-wraper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>Burger Builder App</p>
          </div>
        </div>
        {/* , */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Saving Places App</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Experience;
