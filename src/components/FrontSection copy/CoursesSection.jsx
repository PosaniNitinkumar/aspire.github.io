import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./CoursesSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import { RiSendPlaneFill } from "react-icons/ri";

import { Context } from "../../context/Context";

const CoursesSection = () => {
  let navigate = useNavigate();
  const { walletAddress, titleData } = useContext(Context);
  console.log(walletAddress);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <img src={images.mail2} alt="front section" width={700} />
        <div className={Style.heroSection_box_left}>
          <p>Contact us</p>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email " />
          </div>
          <div className={Style.subscribe_box2}>
            <input type="email" placeholder="Enter your Message " />
          </div>
          <Button btnName="send" />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
