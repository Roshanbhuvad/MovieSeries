import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const myStyle = {
      color: "blue",
      textAlign: "center",
      marginTop: "35px",
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}></div>
          <div key={2}></div>
          <div key={3}></div>
          <div key={4}></div>
        </Slider>
        <div style={myStyle}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
