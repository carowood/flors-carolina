import React from "react";
import TextBox from "../TextBox/TextBox";
import Translate from "../../translations/Translate";
import HomeContent from "../HomeContent/HomeContent";
import BackgroundImageContainer from "../BackgroundImageContainer/BackgroundImageContainer";
import { Link } from "react-router-dom";

export default class ImageContainerLarge extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container__top">
          <BackgroundImageContainer />
          <TextBox>
            <Translate string={"home-top-section-bodytext"} />
          </TextBox>
        </div>
        <HomeContent class={"middle"} image1={""} image2={""}>
          <Translate string={"home-mid-section.title"} />
          <Translate string={"home-mid-section.alt-tag"} />
          <Translate string={"home-mid-section.alt-tag"} />
          <Translate string={"home-mid-section.bodytext"} />
          <Link to="/ourstory" onClick={this.props.click}>
            <Translate string={"home-mid-section.buttontext"} />
          </Link>
        </HomeContent>
        <HomeContent class={"bottom"} image1={""} image2={""}>
          <Translate string={"home-last-section.title"} />
          <Translate string={"home-last-section.alt-tag"} />
          <Translate string={"home-last-section.alt-tag"} />
          <Translate string={"home-last-section.bodytext"} />
          <Link to="/services" onClick={this.props.click}>
            <Translate string={"home-last-section.buttontext"} />
          </Link>
        </HomeContent>
      </div>
    );
  }
}
