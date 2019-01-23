import React from "react";

export default class HomeMiddle extends React.Component {
  render() {
    let item = this.props.children;
    let title = item[0];
    let bodyText = item[3];
    let buttonText = item[4];

    return (
      <div className="container__middle">
        <div className="container__middle__border">
          <div className="container__middle__border__title">
            <h1>{title}</h1>
          </div>
          <div className="container__middle__border__img-one">
            <img
              src={this.props.image1}
              alt=""
              className="container__middle__border__imagecontainer__img-one"
            />
          </div>

          <div className="container__middle__border__img-two">
            <img
              src={this.props.image2}
              alt=""
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
