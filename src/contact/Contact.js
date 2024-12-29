import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Logo from "../assets/logo.jpg";
import bgg from "../assets/bdd.png"; // Ensure correct path

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_shp8rkz", "template_yhkdkge", formRef.current, {
        publicKey: "UfCdklsBbFGX3MeFY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section" style={{ backgroundImage: `url(${bgg})` }}>
      <div className="container" >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header"
        >
          <h1 className="heading">Contact Us</h1>
          <p className="subheading">Reach out for a new project or just say hello</p>
        </motion.div>

        <div className="contact-content"  >
          {/* Left Section */}
          <motion.div
            className="left_section"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={Logo} alt="app_logo" className="contact_logo" />
           
            <p className="description">
              We would be thrilled to hear from you! Please fill in the form or email us your requirements. Let’s build something amazing together!
            </p>
            <p className="address_details">
              <strong>Address:</strong>Suite 369, LR Towers, South Janatha Road, Palarivattom, Kochi, Kerala 682025
            </p>
            <p className="contact_details">
              <strong>Contact:</strong> +91 9961588563, +91 9207205255
            </p>
            <p className="email_details">
              <strong>Email:</strong> blacksofttechnologies@gmail.com
            </p>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="right_section"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Send Us a Message</h3>
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="from_email"
                required
              />
              <textarea
                placeholder="Your Message"
                name="message"
                rows="5"
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="motion-button"
              >
                <span className="gradient-overlay" />
                <span className="button-content">
                  <div className="icon-wrapper">
                    <span>Submit</span>
                    <svg
                      className="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
