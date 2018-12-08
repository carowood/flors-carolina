import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/routes/Home";
import OurStory from "./components/routes/OurStory";
import Contact from "./components/routes/Contact";
import Gallery from "./components/routes/Gallery";
import Services from "./components/routes/Services";
import Press from "./components/routes/Press";
import { LocaleContext } from "./translations/LocaleContext";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/Sidebar";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.scss";

class App extends Component {
  state = {
    sideBarOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };

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
    let menuBackdrop;

    if (this.state.sideBarOpen) {
      menuBackdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: "100%" }}>
        <LocaleContext.Provider value={this.state.preferredLocale}>
          <Navbar
            changeLanguage={this.changeLanguage}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          <SideBar
            changeLanguage={this.changeLanguage}
            show={this.state.sideBarOpen}
            close={this.backdropClickHandler}
          />
          {menuBackdrop}
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
