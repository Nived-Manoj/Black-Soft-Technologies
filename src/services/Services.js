import React from "react";
import "./Services.css";
import DigitalMarketing from '../assets/digital.jpg'
import MobileApp from '../assets/app.jpg'
import WebApp from '../assets/webdev.png'
import SoftwareDev from '../assets/software.jpg'
import Branding from '../assets/brand.jpg'

function Services() {
  return (
    <div id="service_screen" className="service_container">
      <h1 className="service_title">Your Ultimate Business Partner for Success</h1>

      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src={MobileApp}
                alt="Mobile App Development"
                className="flip-card-image" 
              />
              <p className="title">Mobile App Development</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Mobile App Development</p>
              <p>We create custom, user-friendly mobile apps with intuitive designs, seamless functionality, and the latest technologies, delivering scalable solutions to enhance engagement and drive success.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src={WebApp}
                alt="Web Development" 
                className="flip-card-image" 
              />
              <p className="title">Web Development</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Web Development</p>
              <p>We create custom, responsive websites with intuitive navigation, seamless functionality, and modern technologies. Our team delivers tailored, high-performance solutions that drive success and foster lasting connections, all while aligning with your business goals.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src={SoftwareDev}
                alt="Software Development" 
                className="flip-card-image" 
              />
              <p className="title">Software Development</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Software Development</p>
              <p>We specialize in developing custom software solutions that are efficient, scalable, and tailored to meet your unique business needs. Our team combines innovation with technical expertise to deliver high-performance software that enhances productivity and drives long-term success.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src={DigitalMarketing}
                alt="Digital Marketing" 
                className="flip-card-image" 
              />
              <p className="title">Digital Marketing</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Digital Marketing</p>
              <p>We offer comprehensive digital marketing services designed to boost your brand’s visibility and drive engagement. By leveraging the latest strategies and tools, we deliver targeted campaigns that enhance online presence, attract customers, and drive measurable results for your business.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img 
                src={Branding}
                alt="Branding" 
                className="flip-card-image" 
              />
              <p className="title">Branding</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Branding</p>
              <p>We specialize in creating powerful brand identities that resonate with your audience. By combining creativity with strategic insights, we craft unique branding solutions that establish a strong market presence, foster customer loyalty, and drive business growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
