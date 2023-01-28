import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
//----IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import {
  Discover,
  HelpCenter,
  Notification,
  Profile,
  SideBar,
  MintMenu,
} from "./index";
import images from "../../img";
import { Context } from "../../context/Context";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    // <p>sss</p>
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo} onClick={() => navigate("/")}>
            <img
              src={images.Aspire}
              alt="Aspire logo"
              width={135}
              height={135}
            />
          </div>
        </div>

        {/* //END OF LEFT SECTION */}
        <ul className={Style.navbar_container_right}>
          <li className={Style.navbar_container_right_para}>
            <a href="/">Home</a>
          </li>
          <li className={Style.navbar_container_right_para}>
            <a href="/">About Us</a>
          </li>
          <li className={Style.navbar_container_right_para}>
            <a href="/">Courses</a>
          </li>
          <li className={Style.navbar_container_right_para}>
            <a href="/">Career</a>
          </li>
          <li className={Style.navbar_container_right_para}>
            <a href="/">Contact Us</a>
          </li>
          <li className={Style.navbar_container_right_para}>
            <a href="/">Hire From Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
