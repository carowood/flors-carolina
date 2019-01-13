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
          <div
            className={
              "container__" + this.props.class + "__border__textcontainer"
            }
          >
            <h1
              className={
                "container__" +
                this.props.class +
                "__border__textcontainer__title"
              }
            >
              {title}
            </h1>
            <p
              className={
                "container__" +
                this.props.class +
                "__border__textcontainer__bodytext"
              }
            >
              {bodyText}
            </p>
            <button
              onClick={this.props.click}
              className={
                "container__" +
                this.props.class +
                "__border__textcontainer__buttonlink"
              }
            >
              {buttonText}
            </button>
          </div>

          <div
            className={
              "container__" + this.props.class + "__border__imagecontainer"
            }
          >
            <img
              src={this.props.image1}
              alt=""
              className={
                "container__" +
                this.props.class +
                "__border__imagecontainer__img-one"
              }
            />
            <img
              src={this.props.image2}
              alt=""
              className={
                "container__" +
                this.props.class +
                "__border__imagecontainer__img-two"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
