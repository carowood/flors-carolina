import React from "react";
import Translate from "../../translations/Translate";
import PressGridItem from "./PressGridItem";

export default class PressGrid extends React.Component {
  render() {
    return (
      <div className="press-grid-container">
        <PressGridItem
          title={<Translate string={"press.title1"} />}
          bodytext={<Translate string={"press.bodytext1"} />}
          url={<Translate string={"press.url1"} />}
          readMoreLink={<Translate string={"press.readmore1"} />}
        />
        <PressGridItem
          title={<Translate string={"press.title2"} />}
          bodytext={<Translate string={"press.bodytext2"} />}
          url={<Translate string={"press.url2"} />}
          readMoreLink={<Translate string={"press.readmore2"} />}
        />
        <PressGridItem
          title={<Translate string={"press.title3"} />}
          bodytext={<Translate string={"press.bodytext3"} />}
          url={<Translate string={"press.url3"} />}
          readMoreLink={<Translate string={"press.readmore3"} />}
        />
        <PressGridItem
          title={<Translate string={"press.title4"} />}
          bodytext={<Translate string={"press.bodytext4"} />}
          url={<Translate string={"press.url4"} />}
          readMoreLink={<Translate string={"press.readmore4"} />}
        />
      </div>
    );
  }
}
