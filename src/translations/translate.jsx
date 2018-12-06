import React, { PureComponent } from "react";
import { LocaleContext } from "./locale-context";

import en from "./en.json";
import es from "./es.json";
import cat from "./cat.json";

export default class Translate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        en,
        es,
        cat
      }
    };
  }
  render() {
    const { langs } = this.state;
    const { string } = this.props;
    return (
      <LocaleContext.Consumer>
        {value => langs[value][string]}
      </LocaleContext.Consumer>
    );
  }
}
