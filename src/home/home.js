import React from 'react';
import './home.css';
import AutoTypingAnimation from '../components/AutoTypingText';
import {  FaInstagram,  FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";


function Home() {
  return (
    <div id="home_page" className="home_container">
      
      <video
        autoPlay
        loop
        muted
        className="background_video"
      >
        <source src={require('../assets/bg1.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

      {/* Content */}
      <div className="content">
        <div className="left_container">
          <AutoTypingAnimation text={"Crafting Future-Ready Solutions for Your Business"} />
          <p className="description_text">
            Providing innovative solutions to meet your unique business needs through custom software development,
            cutting-edge technology, and strategic digital marketing strategies.
          </p>
          
        </div>
       <a   href="https://wa.me/+919544518563" class="start-project-btn">Start a Project</a>
     
        
     
      </div>
 <div className="social-icond">
            <a href="https://wa.me/+919544518563"  target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
       <div className="social-iconx">
            <a href="https://wa.me/+919544518563"  target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      
          </div>

      
    </div>
  );
}

export default Home;
