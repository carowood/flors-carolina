import React from "react";
import BorderLeft from "../../assets/border/image-corner-left.svg";
import BorderRight from "../../assets/border/image-corner-right.svg";
import ScrollButton from "../ScrollButton/ScrollButton";

export default class TextBox extends React.Component {
  render() {
    return (
      <div className="home-textbox">
        <div className="text-box-container">
          <img src={BorderLeft} alt="border" className="image-border-left" />
          {/* <p className="para">{this.props.text}</p> */}
          <p className="para">{this.props.children}</p>
          <ScrollButton />
          <img src={BorderRight} alt="border" className="image-border-right" />
        </div>
      </div>
    );
  }
}
