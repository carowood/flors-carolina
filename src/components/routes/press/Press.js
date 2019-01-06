import React from "react";
import Translate from "../../../translations/Translate";
import Heading from "../../Headings/H1/H1";
import Video from "../../Video/Video";
import PressGrid from "../../PressGrid/PressGrid";

export default class Press extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }

  render() {
    return (
      <div className="press-container">
        <Heading>
          <Translate string={"press.header"} />
        </Heading>
        <Video />
        <PressGrid />
      </div>
    );
  }
}
