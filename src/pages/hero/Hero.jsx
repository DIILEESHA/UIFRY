import "./hero.css";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

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
            gradientWidth={10}
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
            <img className="top_img" src="https://i.imgur.com/xcVydSK.png" alt="" loading="lazy" />

            <h2 className="view_text">
              Based on
              <div style={{ color: "#28a263", margin: "0px 5px" }}>
                {" "}
                <CountUp enableScrollSpy duration={5} delay={3} end={10000} />+
              </div>
              reviews
            </h2>
          </div>
          <h1 className="view_lg_text">Seamless solution with our magic!</h1>
          <p className="sm_para">
            UIFry is the project management platform that aims for teams to
            achieve an efficient dream management
          </p>

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
          <img className="right_img" src="https://i.imgur.com/sMEslLM.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
