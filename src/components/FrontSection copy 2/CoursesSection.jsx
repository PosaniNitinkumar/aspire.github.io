import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./CoursesSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

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
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Subcribe to our newsletter to get the latest updates and offers
            </p>
          </div>
          <Button btnName="send" />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
