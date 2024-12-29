// import React from 'react'
// import './Testimonial.css'
// import StatsSection from '../statssection/stats'

// function Testimonial() {
//   return (
//     <div id='client' className='testimonial_container'>
//       <h2 className='heading'>Real Stories, Real Success</h2>
// <StatsSection/>
//     </div>
//   )
// }

// export default Testimonial

import React, { useEffect } from 'react';
import './Testimonial.css';
import StatsSection from '../statssection/stats';

function Testimonial() {
  useEffect(() => {
    const heading = document.querySelector('.heading');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('visible'); 
        } else {
          heading.classList.remove('visible'); 
        }
      },
      { threshold: 0.5 } 
    );

    const testimonialSection = document.getElementById('client');
    if (testimonialSection) {
      observer.observe(testimonialSection);
    }

    return () => {
      if (testimonialSection) {
        observer.unobserve(testimonialSection);
      }
    };
  }, []);

  return (
    <div id="client" className="testimonial_container">
      <h2 className="heading">Real Stories, Real Success</h2>
      <StatsSection />
    </div>
  );
}

export default Testimonial;

// import React, { useEffect } from "react";
// import "./Testimonial.css";
// import StatsSection from "../statssection/stats";
// import { motion } from "framer-motion";

// const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

// function MotionPath() {
//   return (
//     <div className="motion-path-container">
//       <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
//         <motion.path
//           d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
//           fill="transparent"
//           color="red"
//           strokeWidth="12"
//           stroke="var(--hue-6-transparent)"
//           strokeLinecap="round"
//           initial={{ pathLength: 0.001 }}
//           animate={{ pathLength: 1 }}
//           transition={transition}
//         />
//       </svg>
//     </div>
//   );
// }

// function Testimonial() {
//   useEffect(() => {
//     const heading = document.querySelector(".heading");

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           heading.classList.add("visible"); // Add the visible class when in view
//         } else {
//           heading.classList.remove("visible"); // Remove for a reusable effect
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the element is visible
//     );

//     const testimonialSection = document.getElementById("client");
//     if (testimonialSection) {
//       observer.observe(testimonialSection);
//     }

//     return () => {
//       if (testimonialSection) {
//         observer.unobserve(testimonialSection);
//       }
//     };
//   }, []);

//   return (
//     <div className="testimonial_container">
//         {/* <div style={{ position: "relative", height: "100vh" }}>
//     <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
//         <motion.path
//             d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
//             fill="transparent"
//             strokeWidth="12"
//             stroke="var(--hue-6-transparent)"
//             strokeLinecap="round"
//             initial={{ pathLength: 0.001 }}
//             animate={{ pathLength: 1 }}
//             transition={transition}
//         />
//     </svg>
//     <motion.div
//         style={box}
//         initial={{ offsetDistance: "0%", scale: 2.5 }}
//         animate={{ offsetDistance: "100%", scale: 1 }}
//         transition={transition}
//     />
// </div> */}

// <motion.div 
// initial={{opacity: 0}}
// animate={{opacity: 1, scale:1}}
// className="heading">Real Stories, Real Success</motion.div>

// <StatsSection/>
//     </div>
//   );
// }

// // const box: React.CSSProperties = {
// //     width: 50,
// //     height: 50,
// //     backgroundColor: "var(--hue-6)",
// //     borderRadius: 10,
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
// // }

// export default Testimonial;
