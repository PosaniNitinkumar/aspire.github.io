import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./FrontSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";
import TypeWritter from "./TypeWritter/TypeWritter";

import { Context } from "../../context/Context";

const FrontSection = () => {
  let navigate = useNavigate();
  const { walletAddress, titleData } = useContext(Context);
  console.log(walletAddress);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <TypeWritter />
          <p>{titleData}</p>
          <Button btnName="Explore" onClick={() => navigate("/Explore")} />
        </div>
        <img src={images.front3} alt="front section" width={600} />
      </div>
    </div>
  );
};

export default FrontSection;
