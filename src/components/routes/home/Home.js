import React from "react";
import Translate from "../../../translations/Translate";
//import Logo from "../../logo/Logo.js";
//import ImageContainerLarge from "../../ImageContainerLarge/ImageContainerLarge";
import { Link } from "react-router-dom";
import HomeTop from "../../HomeTop/HomeTop";
import HomeMiddle from "../../HomeMiddle/HomeMiddle";
import HomeBottom from "../../HomeBottom/HomeBottom";
import MidsectionImage1 from "../../../assets/images/home/mid-section/home-mid-section-3.png";
import MidsectionImage2 from "../../../assets/images/home/mid-section/home-mid-section-1.jpg";

export default class Home extends React.Component {
  componentDidMount() {
    this.props.changeTheme("light");
    document.body.classList.add("home");
  }

  componentWillUnmount() {
    document.body.classList.remove("home");
  }

  render() {
    return (
      <div className="home-container">
        {/* <ImageContainerLarge /> */}
        <HomeTop />

        <HomeMiddle image1={MidsectionImage1} image2={MidsectionImage2}>
          <Translate string={"home-mid-section.title"} />
          <Translate string={"home-mid-section.alt-tag"} />
          <Translate string={"home-mid-section.alt-tag"} />
          <Translate string={"home-mid-section.bodytext"} />
          <Link to="/ourstory" onClick={this.props.click}>
            <Translate string={"home-mid-section.buttontext"} />
          </Link>
        </HomeMiddle>

        <HomeBottom class={"bottom"} image1={""} image2={""}>
          <Translate string={"home-last-section.title"} />
          <Translate string={"home-last-section.alt-tag"} />
          <Translate string={"home-last-section.alt-tag"} />
          <Translate string={"home-last-section.bodytext"} />
          <Link to="/services" onClick={this.props.click}>
            <Translate string={"home-last-section.buttontext"} />
          </Link>
        </HomeBottom>
      </div>
    );
  }
}
