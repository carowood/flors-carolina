import React from "react";
import Translate from "../../../translations/Translate";
import PageTitle from "../../PageTitle/PageTitle";
import Video from "../../Video/Video";
import PressGrid from "../../PressGrid/PressGrid";

export default class Press extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }

  render() {
    return (
      <div className="press-container">
        <PageTitle>
          <Translate string={"press.header"} />
        </PageTitle>
        <Video />
        <PressGrid />
      </div>
    );
  }
}
