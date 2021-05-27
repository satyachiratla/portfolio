import React from 'react';
import author from '../vivek.jpg';

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
                    <h2 className="about-heading"> about me</h2>
                    <p>
                        Hello! I am Satya Chiratla. I have been developing websites for over 2 years.
                        I'm a MERN Stack Developer. Technologies I used MERN(MongoDB, Express, React, Node).
                        I create responsive websites that are displayed on all devices desktops and mobiles.
                        Of course, before I begin developing the webapp, I need to have a layout(design or sketch).
                        And I'm ready to do this for you.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
