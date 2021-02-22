import React from "react";
import PM from "./images/PM.jpg";
import Volvo from "./images/Volvo.jpg";
import SDLG from "./images/SDLG.jpg";

const HeaderImage = () => {
  return (
    <div className="header-image">
      <img src={PM} alt="Logo" />
      <div className="header-right-right">
        <img src={SDLG} alt="LogoVolvo" className="header-image-each" />
        <img src={Volvo} alt="LogoSDLG" className="header-image-each" />
      </div>
    </div>
  );
};

export default HeaderImage;
