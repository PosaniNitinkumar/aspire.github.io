import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./Courses.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

import { Context } from "../../context/Context";

const CoursesSectionCard = () => {
  let navigate = useNavigate();
  const { walletAddress, titleData } = useContext(Context);
  console.log(walletAddress);
  return (
    <div className={Style.whyChooseUsSection}>
      <h1>Courses Offered</h1>
      <div className={Style.whyChooseUsSection_box}>
        <div className={Style.whyChooseUsSection_box_content}>
          <img
            src={images.java}
            className={Style.whyChooseUsSection_box_content_image}
          />
        </div>
        <div className={Style.whyChooseUsSection_box_content}>
          <img
            src={images.python}
            className={Style.whyChooseUsSection_box_content_image}
          />
        </div>
        <div className={Style.whyChooseUsSection_box_content}>
          <img
            src={images.aws}
            className={Style.whyChooseUsSection_box_content_image}
          />
        </div>
        {/* <div className={Style.whyChooseUsSection_box_content}>
          <img
            src={images.devops}
            className={Style.whyChooseUsSection_box_content_image}
          />
        </div> */}
      </div>
    </div>
  );
};

export default CoursesSectionCard;
