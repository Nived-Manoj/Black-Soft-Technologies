

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton';
import "./MobileSideBar.css"
import { Link } from 'react-scroll';

function MobileSideBar() {
  const [open, setOpen] = useState(false);

  const getClipPath = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    return isMobile
      ? { open: `circle(1000px at 30px 30px)`, closed: `circle(18px at 25px 25px)` }
      : { open: `circle(1500px at 40px 40px)`, closed: `circle(10px at 20px 20px)` };
  };

  const variants = {
    open: {
      clipPath: getClipPath().open,//`circle(1500px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: getClipPath().closed,//"circle(30px at 40px 40px)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

 

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      variants={variants} // Attach variants directly
      initial="closed"
    >
      <motion.div className="bg">
        {/* Pass setOpen as a prop to ToggleButton */}
        <ToggleButton setOpen={setOpen} />

        <motion.div
          className='mobile_menu'
          variants={variants}
          initial='closed'
          animate={open ? 'open' : 'closed'}
        >
          <div className='mobile_nav'>
            <Link


              onClick={() => setOpen(false)}
              className='menu_item'
              to='home_page'
              smooth={true}
              duration={510}
              offset={-50}
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className='menu_item'
              to='service_screen'
              smooth={true}
              duration={510}
              offset={-50}
            >
              Services
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className='menu_item'
              to='about_screen'
              smooth={true}
              duration={510}
              offset={-50}
            >
              About Us
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className='menu_item'
              to='contact_screen'
              smooth={true}
              duration={510}
              offset={-50}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MobileSideBar;
