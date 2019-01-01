import React from "react";
import Translate from "../../translations/Translate";
import PressGridItem from "./PressGridItem";

export default class PressGrid extends React.Component {
  render() {
    return (
      <div className="press-grid-container">
        <PressGridItem
          url={
            "https://www.elperiodico.com/es/barcelona/20130608/la-florista-irreductible-2412148"
          }
        >
          <Translate string={"press.title1"} />
          <Translate string={"press.bodytext1"} />
          <Translate string={"press.linktext1"} />
        </PressGridItem>

        <PressGridItem
          url={
            "http://infomercats.somdemercat.cat/portem-quatre-generacions-de-carolines-de-la-familia-a-la-rambla/"
          }
        >
          <Translate string={"press.title2"} />
          <Translate string={"press.bodytext2"} />
          <Translate string={"press.linktext2"} />
        </PressGridItem>

        <PressGridItem
          url={
            "https://www.pressreader.com/spain/la-vanguardia/20160331/282273844502595"
          }
        >
          <Translate string={"press.title3"} />
          <Translate string={"press.bodytext3"} />
          <Translate string={"press.linktext3"} />
        </PressGridItem>

        <PressGridItem url={"https://www.youtube.com/watch?v=4OLoKl1KwtQ"}>
          <Translate string={"press.title4"} />
          <Translate string={"press.bodytext4"} />
          <Translate string={"press.linktext4"} />
        </PressGridItem>
      </div>
    );
  }
}
