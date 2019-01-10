import React from "react";
import TextBox from "../TextBox/TextBox";
import Translate from "../../translations/Translate";
import HomeContent from "../HomeContent/HomeContent";
import BackgroundImageContainer from "../BackgroundImageContainer/BackgroundImageContainer";

export default class ImageContainerLarge extends React.Component {
  render() {
    // let text =
    //   "“Les flors es regalen des del moment que neixes, fins al moment que faltes. Moments molt feliços i moments molt tristos. Però entre aquest període, que és la vida, la flor sempre ens acompanya” ";
    return (
      <div className="container">
        <div className="container__top">
          <BackgroundImageContainer />
          <TextBox>
            <Translate string={"home-top-section-bodytext"} />
          </TextBox>
          {/* <div id="backgroundchange">
            <div className="backgroundimg" id="back1" />
            <div className="backgroundimg" id="back2" />
            <div className="backgroundimg" id="back3" />
            <div className="backgroundimg" id="back4" />
            <div className="backgroundimg" id="back5" />
          </div> */}
        </div>
        <HomeContent class={"middle"} image1={""} image2={""}>
          <Translate string={"home-mid-section.title"} />
          <Translate string={"home-mid-section.alt-tag"} />
          <Translate string={"home-mid-section.alt-tag"} />
          <Translate string={"home-mid-section.bodytext"} />
          <Translate string={"home-mid-section.buttontext"} />
        </HomeContent>
        <HomeContent class={"bottom"} image1={""} image2={""}>
          <Translate string={"home-last-section.title"} />
          <Translate string={"home-last-section.alt-tag"} />
          <Translate string={"home-last-section.alt-tag"} />
          <Translate string={"home-last-section.bodytext"} />
          <Translate string={"home-last-section.buttontext"} />
        </HomeContent>
      </div>
    );
  }
}
