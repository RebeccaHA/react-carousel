import React from "react";
import image_1 from "public/image_1.jpg";
import image_2 from "public/image_2.jpg";
import image_3 from "public/image_1.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class Carousel extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={image_1} alt="" />
        <button>
          <ArrowBackIosIcon />
        </button>
        <button>
          <ArrowForwardIosIcon />
        </button>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}
