import React from 'react';
import author from '../itsme.jpg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h2 className="about-heading"> about me</h2>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
