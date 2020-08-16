import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      items: [
        "/images/image_1.jpg",
        "/images/image_2.jpg",
        "/images/image_3.jpg",
        "/images/image_4.jpg",
        "/images/image_5.jpg",
        "/images/image_6.jpg"
      ]
    };
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleClickUp = this.handleClickUp.bind(this);
  }

  handleClickDown = () => {
    let index = this.state.current;
    let length = this.state.items.length;
    if (index === 0) {
      index = length - 1;
    } else {
      index = index - 1;
    }

    this.setState({ current: index });
    // this.setState(previousState => {
    //   return {
    //     current: previousState.current - 1
    //   };
    // });
  };

  dotUp = index => {
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].id === `${index}`) {
        console.log(dots[i]);
        dots[i].style.backgroundColor = "blue";
      } else {
        dots[i].style.backgroundColor = "black";
      }
    }
  };

  handleClickUp = () => {
    let index = this.state.current;
    let length = this.state.items.length;

    if (index === length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    this.setState({ current: index });
    this.dotUp(index);
  };

  render() {
    let index = this.state.current,
      src = this.state.items[index];

    return (
      <div className="container">
        <img src={src} alt="" />
        <button onClick={this.handleClickDown} id="back-button">
          back
        </button>
        <button onClick={this.handleClickUp} id="forward-button">
          forward
        </button>
        <div className="dot-container">
          <div className="dot" id="0"></div>
          <div className="dot" id="1"></div>
          <div className="dot" id="2"></div>
          <div className="dot" id="3"></div>
          <div className="dot" id="4"></div>
          <div className="dot" id="5"></div>
        </div>
      </div>
    );
  }
}
