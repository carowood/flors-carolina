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
import "./scss/App.scss";

class App extends Component {
  // CHANGE THE DEFAULT LANG TO CAT or ES ?
  state = {
    menuSideBarOpen: false,
    preferredLocale: "en"
  };

  menuSidebarToggleClickHandler = () => {
    this.setState(prevState => {
      return { menuSideBarOpen: !prevState.menuSideBarOpen };
    });
  };

  menuBackdropClickHandler = () => {
    this.setState({ menuSideBarOpen: false });
  };

  changeLanguage = event => {
    let id = event.currentTarget.id;
    this.setState({
      preferredLocale: id
    });
  };

  render() {
    let menuBackdrop;

    if (this.state.menuSideBarOpen) {
      menuBackdrop = <Backdrop click={this.menuBackdropClickHandler} />;
    }

    return (
      <div className="App">
        <LocaleContext.Provider value={this.state.preferredLocale}>
          <Navbar
            path={this.props}
            changeLanguage={this.changeLanguage}
            menuSidebarClickHandler={this.menuSidebarToggleClickHandler}
          />
          <SideBar
            changeLanguage={this.changeLanguage}
            show={this.state.menuSideBarOpen}
            close={this.menuBackdropClickHandler}
          />
          {menuBackdrop}
          {/* <Route exact path="/" component={Home} /> */}
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
