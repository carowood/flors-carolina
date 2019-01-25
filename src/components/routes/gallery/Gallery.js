import React from "react";
import Translate from "../../../translations/Translate";
import GalleryGrid from "../../GalleryGrid/GalleryGrid";
import PageTitle from "../../PageTitle/PageTitle";

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="gallery-container">
        <div className="page-container_header">
          <PageTitle>
            <Translate string={"gallery.header"} />
          </PageTitle>
        </div>
        <GalleryGrid />
      </div>
    );
  }
}
