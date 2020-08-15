import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class Carousel extends React.Component {
  const = [];

  render() {
    return (
      <div className="container">
        <img src="public/image_1.jpg" alt="" />
        <img src="public/image_2.jpg" alt="" />
        <img src="public/image_3.jpg" alt="" />
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
