import React from "react";
//import Translate from "";

export default class StoryItem extends React.Component {
  render() {
    let selected = "";
    let image = this.props.image;
    if (this.props.selected === this.props.sid) {
      selected = " selected";
    }
    console.log(this.props);
    let title = this.props.children[0];
    let bodyText = this.props.children.map((child, index) => {
      if (index > 0) {
        return (
          <p key={index} className="story-item__bodytext">
            {child}
          </p>
        );
      }
    });

    return (
      <div
        id={this.props.sid}
        className={"story-item__container" + selected}
        onClick={this.props.onClick}
      >
        <div className="story-item__content">
          <div className="story-item__image-container">
            <img className="story-item__image" src={image} alt="story" />
            <p className="story-item__title">
              <a href="/">{title}</a>
            </p>
          </div>
        </div>

        {bodyText}
      </div>
    );
  }
}
