import React from "react";
import icon from "../../assets/icons/scroll-down-icon.png";

export default class ScrollButton extends React.Component {
  render() {
    return (
      <button className="scroll-down-button">
        <img className="scroll-down-icon" src={icon} alt="scroll-down" />
      </button>
    );
  }
}
