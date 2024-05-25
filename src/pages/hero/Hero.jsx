import "./hero.css";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50, transition: { type: "spring", stiffness: 10 } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40, duration: 5 },
  },
};

const Hero = () => {
  return (
    <div className="hero_main">
      <div className="hero_container">
        <div className="hero_img">
          <img src="https://i.imgur.com/wr82owh.png" alt="Hero" />
        </div>
        <div className="transformer">
          <Marquee
            gradient={true}
            gradientWidth={300}
            gradientColor="#000"
            speed={30} // Adjust speed as needed
            direction="left" // Direction of the marquee
            loop={0} // 0 for infinite looping
            autoFill={true}
          >
            <div className="halo">
              <h2>Seamless solution✨</h2>
              <h2>efficient dream management✨</h2>
              <h2>UIFry✨</h2>
              <h2>Brand✨</h2>
              <h2>Marketing✨</h2>
            </div>
          </Marquee>
        </div>
        <div className="hero_sub_container one">
          <div className="hero_top_view">
            <img
              className="top_img"
              src="https://i.imgur.com/xcVydSK.png"
              alt=""
              loading="lazy"
            />

            <h2 className="view_text">
              Based on
              <div style={{ color: "#28a263", margin: "0px 5px" }}>
                {" "}
                <CountUp enableScrollSpy duration={5} delay={3} end={10000} />+
              </div>
              reviews
            </h2>
          </div>
          <motion.h1
            className="view_lg_text"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Seamless solution with our magic!
          </motion.h1>
          <motion.p
            className="sm_para"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            UIFry is the project management platform that aims for teams to
            achieve an efficient dream management
          </motion.p>

          <div className="demo_view">
            <div className="demo_viewer">
              <div className="demo_line"></div>
              <p className="demo_para">
                Start work efficiently with UIFry SaaS product
              </p>
            </div>
            <div className="demo_btn">
              <button>get a free demo</button>
            </div>
          </div>

          <div className="bootm_img">
            <img src="https://i.imgur.com/43B8m55.png" alt="" />
          </div>
        </div>
        <div className="hero_sub_container two">
          <img
            className="right_img"
            src="https://i.imgur.com/sMEslLM.png"
            alt=""
          />
        </div>
        <div className="copied">
          <h2 className="copyright">
            Developed & Designed by :
            <a
              href="https://dileeshanawarathna.me"
              target="_blank"
      
            >
              @Dileesha✨
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
