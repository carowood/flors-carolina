import React from "react";

export default function sideBarToggleButton(props) {
  console.log("hello", props);
  return (
    <button
      className={"toggle-button toggle-button-" + props.theme}
      onClick={props.click}
    >
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
}
