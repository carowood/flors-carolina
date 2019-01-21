import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/routes/home/Home";
import OurStory from "./components/routes/ourstory/OurStory";
import Contact from "./components/routes/contact/Contact";
import Gallery from "./components/routes/gallery/Gallery";
import Services from "./components/routes/services/Services";
import Press from "./components/routes/press/Press";
import { LocaleContext } from "./translations/LocaleContext";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/Sidebar";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import "./scss/App.scss";
import ReactGA from "react-ga";

class App extends Component {
  state = {
    menuSideBarOpen: false,
    preferredLocale: localStorage.getItem("preferredLocale")
      ? localStorage.getItem("preferredLocale")
      : "cat",
    navTheme: "light"
  };

  componentDidMount() {
    ReactGA.initialize("UA-132018054-1"); // Here we should use our GA id
  }
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
    localStorage.setItem("preferredLocale", id);

    this.menuBackdropClickHandler();
  };

  changeTheme = theme => {
    this.setState({
      navTheme: theme
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
            theme={this.state.navTheme}
            path={this.props}
            changeLanguage={this.changeLanguage}
            menuSidebarClickHandler={this.menuSidebarToggleClickHandler}
          />
          <SideBar
            theme={this.state.navTheme}
            changeLanguage={this.changeLanguage}
            show={this.state.menuSideBarOpen}
            close={this.menuBackdropClickHandler}
          />
          {menuBackdrop}
          <Switch>
            <Route
              exact
              path="/home"
              render={routeProps => (
                <Home {...routeProps} changeTheme={this.changeTheme} />
              )}
            />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route
              path="/ourstory"
              render={routeProps => (
                <OurStory {...routeProps} changeTheme={this.changeTheme} />
              )}
            />
            <Route
              path="/services"
              render={routeProps => (
                <Services {...routeProps} changeTheme={this.changeTheme} />
              )}
            />
            <Route
              path="/gallery"
              render={routeProps => (
                <Gallery {...routeProps} changeTheme={this.changeTheme} />
              )}
            />
            <Route
              path="/contact"
              render={routeProps => (
                <Contact {...routeProps} changeTheme={this.changeTheme} />
              )}
            />
            <Route
              path="/press"
              render={routeProps => (
                <Press {...routeProps} changeTheme={this.changeTheme} />
              )}
            />
            {/* If the route page of the url is typed incorrectly, 
              we redirect to the homepage */}
            <Route path="*" render={() => <Redirect to="/home" />} />
          </Switch>
          <Footer />
        </LocaleContext.Provider>
      </div>
    );
  }
}

export default App;
