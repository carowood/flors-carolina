import React from "react";
import TextBox from "../TextBox/TextBox";
import BackgroundImageContainer from "../BackgroundImageContainer/BackgroundImageContainer";
import Translate from "../../translations/Translate";

export default class HomeTop extends React.Component {
  render() {
    return (
      <div className="container__top">
        <BackgroundImageContainer />
        <TextBox>
          <Translate string={"home-top-section-bodytext"} />
        </TextBox>
      </div>
    );
  }
}
