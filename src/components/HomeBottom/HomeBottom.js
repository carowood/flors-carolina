import React from "react";

export default class HomeBottom extends React.Component {
  render() {
    let item = this.props.children;
    let title = item[0];
    let bodyText1 = item[3];
    let bodyText2 = item[4];
    let buttonText1 = item[5];
    let buttonText2 = item[6];

    let altTag1 = "";
    if (this.props.lang === "en") {
      altTag1 = "A bridal bouquet";
    } else if (this.props.lang === "cat") {
      altTag1 = "Un ram de núvia";
    } else {
      altTag1 = "Un ramo de novia";
    }

    let altTag2 = "";
    if (this.props.lang === "en") {
      altTag2 = "Table decorations";
    } else if (this.props.lang === "cat") {
      altTag2 = "Decoracions de taula";
    } else {
      altTag2 = "Decoraciones de mesa";
    }

    return (
      <div className="container__bottom">
        <div className="container__bottom__border">
          <div className="container__bottom__border__title">
            <h1>{title}</h1>
          </div>

          <div className="container__bottom__border__img-one">
            <img
              src={this.props.image1}
              alt={altTag1}
              className="container__bottom__border__imagecontainer__img-one"
            />
          </div>

          <div className="container__bottom__border__img-two">
            <img
              src={this.props.image2}
              alt={altTag2}
              className="container__bottom__border__imagecontainer__img-two"
            />
          </div>

          <div className="container__bottom__border__bodytext1">
            <p>{bodyText1}</p>
            <div className="container__bottom__border__buttonlink1">
              <button onClick={this.props.click}>{buttonText1}</button>
            </div>
          </div>

          <div className="container__bottom__border__bodytext2">
            <p>{bodyText2}</p>
            <div className="container__bottom__border__buttonlink2">
              <button onClick={this.props.click}>{buttonText2}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
