import React from "react";
import TextBox from "../TextBox/TextBox";

export default class ImageContainerLarge extends React.Component {
  render() {
    let text =
      "“Les flors es regalen des del moment que neixes, fins al moment que faltes. Moments molt feliços i moments molt tristos. Però entre aquest període, que és la vida, la flor sempre ens acompanya” ";
    return (
      <div>
        <img
          className="home-background"
          src="/images/background.jpg"
          alt="Flowers by Flors Carolina"
        />
        <TextBox text={text} />
      </div>
    );
  }
}
