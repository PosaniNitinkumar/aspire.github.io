import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./WhyChooseUs.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

import { Context } from "../../context/Context";

const CoursesSection = () => {
  let navigate = useNavigate();
  const { walletAddress, titleData } = useContext(Context);
  console.log(walletAddress);
  return (
    <div className={Style.heroSection}>
      <h1> Why Choose Us</h1>
      <div className={Style.heroSection_box}>
        <img src={images.ir} alt="front section" width={700} />
        <div className={Style.heroSection_box_left}>
          <h1>Industry Ready Certification</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            nostrum quasi. Beatae excepturi doloremque dolorem possimus nesciunt
            officiis corporis saepe ut! Adipisci ex enim quibusdam ducimus
            repellendus laboriosam, cupiditate repudiandae.
          </p>
        </div>
      </div>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Job Placement</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            nostrum quasi. Beatae excepturi doloremque dolorem possimus nesciunt
            officiis corporis saepe ut! Adipisci ex enim quibusdam ducimus
            repellendus laboriosam, cupiditate repudiandae.
          </p>
        </div>
        <img src={images.jp} alt="front section" width={700} />
      </div>
    </div>
  );
};

export default CoursesSection;
