import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <img src={images.Aspire} alt="footer logo" height={150} width={150} />
          <p>
            Aspire is an outcome driven career school. Our mission is to skill
            India’s untapped & underutilized talent, and to train them for some
            of the most in-demand jobs in the world.
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <p>About Us</p>
          <p>Courses</p>
          <p>Career</p>
          <p>Hire From Us</p>
        </div>

        <div className={Style.footer_box_help}>
          <h3>Contact Us</h3>
          <p>Whatsapp +91 000000000</p>
          <p>call +91 000000000</p>
          <p>Mail xyz@gmail.com</p>
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Subcribe to our newsletter to get the latest updates and offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
