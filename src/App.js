import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
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
import "./scss/App.scss";

class App extends Component {
  // CHANGE THE DEFAULT LANG TO CAT or ES ?
  state = {
    menuSideBarOpen: false,
    preferredLocale: "en",
    navTheme: "light"
    // navOpacity: 0 //related to commented out code below, don't delete!
  };

  // ================================================================================== //
  // ================================================================================== //

  // NAV BAR OPACITY FUNCTION COMMENTED OUT FOR NOW - MAYBE WE CAN USE THIS WITH STATE
  // IN ORDER TO MAKE NAV VISIBLE UPON SCROLL ON HOMEPAGE.
  // FOR NOW, USING CSS ONLY, BUT WILL KEEP THIS CODE IN PLACE IN CASE WE DECIDE
  // TO USE IT.

  // componentDidMount = () => {
  //   window.addEventListener("scroll", this.updateNavOpacity);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener("scroll", this.updateNavOpacity);
  // };

  // updateNavOpacity = () => {
  //   const navbarHeight = 50;
  //   const bottomBorderWidth = 2;
  //   const headerHeight = 200;
  //   const fadeInDistance = 40;
  //   const endFade = headerHeight - navbarHeight - bottomBorderWidth;
  //   const startFade = endFade - fadeInDistance;
  //   const scrollY = window.scrollY;

  //   if (scrollY < startFade) {
  //     if (this.state.opacity === 0) return;
  //     this.setState({ navOpacity: 0 });
  //     return;
  //   }

  //   if (scrollY > endFade) {
  //     if (this.state.opacity === 1) return;
  //     this.setState({ navOpacity: 1 });
  //     return;
  //   }

  //   const pxPastStartFade = scrollY - startFade;
  //   const navOpacity = pxPastStartFade / (endFade - startFade);
  //   this.setState({ navOpacity });
  // };

  // ================================================================================== //
  // ================================================================================== //

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
            // opacity={this.state.navOpacity} //related to commented out code above, don't delete!
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
        </LocaleContext.Provider>
      </div>
    );
  }
}

export default App;
