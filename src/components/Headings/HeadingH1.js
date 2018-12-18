import React from "react";
import Translate from "../../../translations/Translate";
import StoryItem from "./HeadingH1";

export default class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">{this.props.children}</h1>
      </div>
    );
  }
}
