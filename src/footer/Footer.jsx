import React from "react";
import "./footer.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-inner">
          {/* constainer 1*/}
          <div className="footerContainer">
            <h1 className="fotter-logo">
              <span>Deal</span>Dazzles
            </h1>
            <hr className="hr-top" />
            <div className="fotterBlogExplaine">
              “Elevate your online shopping experience with our handpicked
              selection and exclusive deals.”
            </div>
            <div className="fotterSocialMedia">
              <Instagram /> <Facebook /> <LinkedIn /> <Twitter />
            </div>
          </div>
          {/* constainer 2*/}
          <div className="footerContainer">
            <h1 className="fotterSiren" style={{ color: "red" }}>
              Services
            </h1>
            <hr className="hr-top" />

            <Link to="/smartphones" className="FooterNonActiveNav">
              Mobiles
            </Link>
            <Link to="/electronics" className="FooterNonActiveNav">
              Electronics
            </Link>
            <Link to="/shoes" className="FooterNonActiveNav">
              Shoes
            </Link>
            <Link to="/watch" className="FooterNonActiveNav">
              Watch
            </Link>
            <Link to="/cloths" className="FooterNonActiveNav">
              Cloths
            </Link>
            <Link to="/appliances" className="FooterNonActiveNav">
              Appliances
            </Link>
            <Link to="/toy" className="FooterNonActiveNav">
              Toys & Doll
            </Link>
          </div>
          {/* constainer 3 */}
          <div className="footerContainer">
            <h1 className="Resources" style={{ color: "red" }}>
              About
            </h1>
            <hr className="hr-top" />
            <div className="help">Contact Us</div>
            <div className="help">About Us</div>
            <div className="help">Careers</div>
            <div className="help">stories</div>
            <div className="help">Corporate Information</div>
          </div>
          {/* container 4 */}
          <div className="footerContainer">
            <h1 className="Resources" style={{ color: "red" }}>
              Help
            </h1>
            <hr className="hr-top" />
            <div className="help">Payment</div>
            <div className="help">Shipping</div>
            <div className="help">Cancellation & Return</div>
            <div className="help">FAQ</div>
            <a href="mailto:@arbabkhan4u.ak.ak@gmail.com">mail us</a>
          </div>
          {/* constainer 5*/}
          <div className="footerContainer">
            <h1 className="readMore" style={{ color: "red" }}>
              Consumer Policy
            </h1>
            <hr className="hr-top" />
            <div>Terms of use</div>
            <div>Security</div>
            <div>Policy</div>
            <div>Complains</div>
          </div>
        </div>

        <div className="footer-copywrite-div">
          <CopyrightIcon /> 2023 DealDazzles All Rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
