import { useState } from "react";
import { motion } from "framer-motion";
import "./nav.css";

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    y: "0%",
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  closed: {
    opacity: 0,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="nav_grid">
        <div className="nav_sub_grid">
          <div className="nav_logo">
            <img
              src="https://i.imgur.com/AMh7xsu.png"
              alt="nav-logo"
              loading="lazy"
            />
          </div>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li>About UIFry?</li>
            <li>Features</li>
            <li>Resources</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="li_initial">
              <button className="get_demo_btn">get demo</button>
            </li>
            <li className="li_initials">Contact Sales</li>
            <li className="li_initials">search</li>
            <li>
              <button className="nav_toggler" onClick={toggleMobileNav}>
                <img src="https://i.imgur.com/7Zgi3IR.png" alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        className="mobile_nav"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div className="sm_mobile_divider">
          <div className="clode_btn additional">
            <button className="nav_toggler" onClick={toggleMobileNav}>
              <img src="https://i.imgur.com/czCD9Bi.png" alt="" />
            </button>
          </div>
          <ul className="sm_nav_ul">
            <li className="sm_nav_li">Home</li>
            <li className="sm_nav_li">Services</li>
            <li className="sm_nav_li">Projects</li>
            <li className="sm_nav_li">About Us</li>
            <li className="sm_nav_li">Blog</li>
            <li className="sm_nav_li">Contact</li>
          </ul>

          <div className="contacts">
            <ul className="sm_contact_ul">
              <li className="sm_contact_li">LinkedIn</li>
              <li className="sm_contact_li">Instagram</li>
              <li className="sm_contact_li">FB</li>
            </ul>
          </div>
        </div>
        <div className="sm_mobile_divider">
          <div className="clode_btn">
          <button className="nav_toggler" onClick={toggleMobileNav}>
              <img src="https://i.imgur.com/0IFUXSO.png" alt="" />
            </button>
          </div>
          <div className="sm_idea_divider">
            <h2 className="idea_title colored">Got an Idea?</h2>
            <h1 className="main_title colored">
              Let’s craft brilliant together!
            </h1>
            <button className="idea_btn">get in touch</button>
          </div>
          <div className="contacts">
            <ul className="sm_contact_ul">
              <li className="sm_contact_li colored">T&C</li>
              <li className="sm_contact_li colored">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
