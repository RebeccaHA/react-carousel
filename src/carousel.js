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
        "/images/image_3.jpg"
      ]
    };
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleClickUp = this.handleClickUp.bind(this);
  }

  handleClickDown = () => {
    let index = this.state.current;
    index = index + 1;

    this.setState({ current: index });
    // this.setState(previousState => {
    //   return {
    //     current: previousState.current - 1
    //   };
    // });
  };

  handleClickUp = () => {
    this.setState(previousState => {
      return {
        current: previousState.current + 1
      };
    });
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
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}
