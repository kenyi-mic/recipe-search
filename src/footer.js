import React from "react";
import "./footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowuUpwardIcon from "@material-ui/icons/ArrowUpward";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import TodayIcon from "@material-ui/icons/Today";
import PlaceIcon from "@material-ui/icons/Place";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="arraw">
              <ArrowuUpwardIcon />
            </i>
          </a>
        </div>
        <div className="social">
          <h5>Follow us on</h5>
          <ul>
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="policy">
          <h5>What you must know</h5>
          <li>
            <a href="/">Your privacy</a>
          </li>
          <li>
            <a href="/">Our community</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
        </div>
        <div className="links">
          <h5>Contact us</h5>
          <li>
            <a href="/">
              Call <PhoneInTalkIcon />{" "}
            </a>
          </li>
          <li>
            <a href="/">
              Apointment <TodayIcon />
            </a>
          </li>
          <li>
            <a href="/">
              Direction <PlaceIcon />
            </a>
          </li>
        </div>
      </div>
      <div className="last-brand">
        <h6>
          <span> HYPERDEVELOPER</span> &copy; 2021{" "}
        </h6>
      </div>
    </div>
  );
};

export default footer;
