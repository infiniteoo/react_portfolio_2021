import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Boise, Idaho</p>
            </div>
            <div className="d-flex">
              <a href="tel:763-220-0042">+1(763)220-0042</a>
            </div>
            <div className="d-flex">
              <p>troydorman@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-60} className="nav-link">
                  Home
                </Link>

                <Link
                  smooth={true}
                  to="about"
                  offset={-60}
                  className="nav-link"
                >
                  About Me
                </Link>

                <Link
                  smooth={true}
                  to="services"
                  offset={-60}
                  className="nav-link"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-60}
                  className="nav-link"
                >
                  Experience
                </Link>

                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-60}
                  className="nav-link"
                >
                  Portfolio
                </Link>

                <Link
                  smooth={true}
                  to="contacts"
                  offset={-60}
                  className="nav-link"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://github.com/infiniteoo"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/infiniteoo"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://github.com/infiniteoo"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://github.com/infiniteoo"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Troy Dorman | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
