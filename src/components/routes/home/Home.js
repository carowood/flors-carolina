import React from "react";
import Translate from "../../../translations/Translate";
//import Logo from "../../logo/Logo.js";
//import ImageContainerLarge from "../../ImageContainerLarge/ImageContainerLarge";
import { Link } from "react-router-dom";
import HomeTop from "../../HomeTop/HomeTop";
import HomeMiddle from "../../HomeMiddle/HomeMiddle";
import HomeBottom from "../../HomeBottom/HomeBottom";
import MidsectionImage1 from "../../../assets/images/home/mid-section/home-mid-section-3.png";
import MidsectionImage2 from "../../../assets/images/home/mid-section/home-mid-section-1.png";
import BottomsectionImage1 from "../../../assets/images/services/Wthree.png";
import BottomsectionImage2 from "../../../assets/images/services/Weight.png";

export default class Home extends React.Component {
  componentDidMount() {
    this.props.changeTheme("light");
    document.body.classList.add("home");
    this.scrollTarget = document.getElementsByClassName("container__middle")[0];
    this.scrollButton = document.getElementsByClassName(
      "scroll-down-button"
    )[0];
    if (this.scrollTarget && this.scrollButton) {
      this.scrollButton.addEventListener("click", () =>
        this.scrollTarget.scrollIntoView({
          block: "center",
          behavior: "smooth"
        })
      );
    }
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
          <Translate string={"home-mid-section.alt-tag1"} />
          <Translate string={"home-mid-section.alt-tag2"} />
          <Translate string={"home-mid-section.bodytext"} />
          <Link to="/ourstory" onClick={this.props.click}>
            <Translate string={"home-mid-section.buttontext"} />
          </Link>
        </HomeMiddle>

        <HomeBottom image1={BottomsectionImage1} image2={BottomsectionImage2}>
          <Translate string={"home-last-section.title"} />
          <Translate string={"home-last-section.alt-tag1"} />
          <Translate string={"home-last-section.alt-tag2"} />
          <Translate string={"home-last-section.bodytext1"} />
          <Translate string={"home-last-section.bodytext2"} />
          <Link to="/services" onClick={this.props.click}>
            <Translate string={"home-last-section.buttontext1"} />
          </Link>
          <Link to="/services" onClick={this.props.click}>
            <Translate string={"home-last-section.buttontext2"} />
          </Link>
        </HomeBottom>
      </div>
    );
  }
}
