import React from "react";

export default class ImageContainerLarge extends React.Component {
  render() {
    console.log("homeprops", this.props.children);

    let item = this.props.children;
    let title = item[0];
    let bodyText = item[3];
    let buttonText = item[4];

    return (
      <div className={"container__" + this.props.class}>
        <div className={"container__" + this.props.class + "__border"}>
          <h1 className={"container__" + this.props.class + "__border__title"}>
            {title}
          </h1>
          <img
            src={this.props.image1}
            alt=""
            className={"container__" + this.props.class + "__border__img-one"}
          />
          <img
            src={this.props.image1}
            alt=""
            className={"container__" + this.props.class + "__border__img-two"}
          />
          <p
            className={"container__" + this.props.class + "__border__bodytext"}
          >
            {bodyText}
          </p>
          <button
            className={"container__" + this.props.class + "__border__link"}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}
