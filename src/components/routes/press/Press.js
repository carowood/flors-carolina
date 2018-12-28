import React from "react";
import Translate from "../../../translations/Translate";
import Heading from "../../Headings/H1/H1";
import Video from "../../Video/Video";

export default class Press extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="page-container">
        <Heading>
          <Translate string={"press.header"} />
        </Heading>
        <Video />
        {/* <p>
          <Translate string={"press.description"} />
        </p> */}
      </div>
    );
  }
}
