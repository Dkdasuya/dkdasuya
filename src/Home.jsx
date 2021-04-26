import react from "react";
import web from "./Images/Capturedk.PNG";
import {NavLink} from 'react-router-dom';
import Services from "./Services";
import Skills from "./Skills";
import Footer from "./Footer";
import Certification from "./Certification";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Hello EveryOne, I'm
                    <strong className="brand-name">  Dheeraj Kapoor</strong>
                  </h1>
                  <h4 className="my-3">
                  I am a third year student pursuing Computer Science Engineering @ Guru Nanak Dev University Amritsar Campus. I am always ready to have new experiences and learning new things. Looking forward for great opportunities. 
                  Interested in Machine Learning.
                  </h4>
                  {/* <div className="mt-3">
                    <NavLink to="/services" className="btn-get-started">
                      Get Started
                    </NavLink>
                   </div> */}
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <Skills/>
      <Certification/>
      <Footer/>
    </>
  );
};

export default Home;
