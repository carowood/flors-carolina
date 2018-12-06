import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/routes/home";
import OurStory from "./components/routes/ourstory";
import Contact from "./components/routes/contact";
import Gallery from "./components/routes/gallery";
import Services from "./components/routes/services";
import Press from "./components/routes/press";
import { LocaleContext } from "./translations/locale-context";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferredLocale: "en"
    };
  }
  changeLanguage = ({ currentTarget: { id } }) => {
    this.setState({
      preferredLocale: id
    });
  };
  render() {
    return (
      <div className="App">
        <LocaleContext.Provider value={this.state.preferredLocale}>
          <Navigation changeLanguage={this.changeLanguage} />
          <Route exact path="/" component={Home} />
          <Route path="/ourstory" component={OurStory} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/press" component={Press} />
        </LocaleContext.Provider>
      </div>
    );
  }
}

export default App;
