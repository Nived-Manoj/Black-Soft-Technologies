import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about_screen" className="about_container">
      <motion.div
        className="about_content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="about_heading">Building the Future!</h1>
        <p className="about_description">
          At <span className="brand_name">Black Soft Technologies</span>, we
          blend creativity with strategic brilliance to push the boundaries of
          what's possible. Our team combines cutting-edge development expertise
          with innovative solutions, committed to excellence and precision. We
          approach every project with a focus on delivering success that drives
          your business forward. Our commitment to quality, creativity, and
          precision ensures that every project we undertake is delivered with
          the highest standards. We don't just develop software—we build
          long-lasting relationships, driving innovation and success at every
          step. Let's build the future together!
        </p>

       
      </motion.div>
    </div>
  );
}

export default About;
