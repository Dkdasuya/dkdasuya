import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import MailIcon from "@material-ui/icons/Mail";

const Footer = () => {
  return (
    <>
      <section id="foo" className="footer my-3">
      <footer class="footer_area p_120">
        	<div class="container main_div">
        		<div class="row footer_inner mx-auto">
        			<div class="col-lg-5 col-sm-6">
        				<aside class="f_widget ab_widget">
        					<div class="f_title">
        						<h3>About This Website</h3>
        					</div>
        					<p>This Website is underconstruction as new things are being added to portfolio everyday.You can visit my LinkedIn <a target="_blank" href="https://www.linkedin.com/in/dheeraj-kapoor/">Here.</a>
                  
                  </p>
                  <p>
                  © Copyright 2021-22
                  </p>
        					
        				</aside>
        			</div>
        			<div class="col-lg-4 col-sm-6">
        			
        			</div>
        			<div class="col-lg-3">
        				<aside class="f_widget social_widget">
        					<div class="f_title">
        						<h3>Contact Me Here</h3>
        					</div>
        					
        					<ul class="list">
        						<li><SmartphoneIcon/>+91-9464541057</li>
                    <li><MailIcon/>dkdasuya7@gmail.com</li>
        					</ul>
        				</aside>
        			</div>
        		</div>
        	</div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
