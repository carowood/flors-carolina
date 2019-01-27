import React from "react";

export default class HomeMiddle extends React.Component {
  render() {
    let item = this.props.children;
    let title = item[0];
    let bodyText = item[3];
    let buttonText = item[4];

    let altTag1 = "";
    if (this.props.lang === "en") {
      altTag1 = "Carolina with Sir Alexander Fleming";
    } else if (this.props.lang === "cat") {
      altTag1 = "Carolina amb Sir Alexander Fleming";
    } else {
      altTag1 = "Carolina con Sir Alexander Fleming";
    }

    let altTag2 = "";
    if (this.props.lang === "en") {
      altTag2 = "Carolina and her sister, today";
    } else if (this.props.lang === "cat") {
      altTag2 = "Carolina i la seva germana, avui";
    } else {
      altTag2 = "Carolina y su hermana, hoy";
    }

    return (
      <div className="container__middle">
        <div className="container__middle__border">
          <div className="container__middle__border__title">
            <h1>{title}</h1>
          </div>
          <div className="container__middle__border__img-one">
            <img
              src={this.props.image1}
              alt={altTag1}
              className="container__middle__border__imagecontainer__img-one"
            />
          </div>

          <div className="container__middle__border__img-two">
            <img
              src={this.props.image2}
              alt={altTag2}
              className="container__middle__border__imagecontainer__img-two"
            />
          </div>
          <div className="container__middle__border__bodytext">
            <p>{bodyText}</p>
            <div className="container__middle__border__buttonlink">
              <button onClick={this.props.click}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
