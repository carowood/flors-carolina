import React from "react";
import Translate from "../../../translations/Translate";
import GalleryGrid from "../../GalleryGrid/GalleryGrid.js";

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="page-container">
        <div className="page-container_header">
          <h1>
            <Translate string={"gallery.header"} />
          </h1>
        </div>
        <GalleryGrid />
      </div>
    );
  }
}