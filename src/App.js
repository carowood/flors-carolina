import React, { Component, lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/routes/home/Home";
import { LocaleContext } from "./translations/LocaleContext";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/Sidebar";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import "./scss/App.scss";
import ReactGA from "react-ga";

const OurStory = lazy(() => import("./components/routes/ourstory/OurStory"));
const Contact = lazy(() => import("./components/routes/contact/Contact"));
const Gallery = lazy(() => import("./components/routes/gallery/Gallery"));
const Services = lazy(() => import("./components/routes/services/Services"));
const Press = lazy(() => import("./components/routes/press/Press"));

class App extends Component {
  // Using state to control the display of navBar theme, sidebar menu and langauge.
  // preferredLocale is saved in state, either as the value present in localStorage
  // (if there is one), else the default language is set to Catalan ("cat").
  state = {
    menuSideBarOpen: false,
    preferredLocale: localStorage.getItem("preferredLocale")
      ? localStorage.getItem("preferredLocale")
      : "cat",
    navTheme: "light"
  };

  componentDidMount() {
    // Add Google Analytics ID for page tracking.
    ReactGA.initialize("UA-132018054-1");
  }
  // Function for toggling the menu bar open and closed on mobile/tablet,
  // setting the state to the opposite of what it as previously, using prevState reference.
  menuSidebarToggleClickHandler = () => {
    this.setState(prevState => {
      return { menuSideBarOpen: !prevState.menuSideBarOpen };
    });
  };

  // Function for controlling the backdrop rendering on mobile when the side menu displays.
  menuBackdropClickHandler = () => {
    this.setState({ menuSideBarOpen: false });
  };

  // Change Language gets the id of the element that the user clicks on and assigns
  // the value to the variable 'id'.
  // It then sets the preferredLocale in state to the value of 'id'.
  // It saves the selected language to localStorage so that the user's choice
  // is stored in their browser.
  // Once the choice is made, the menuBackdropClickHander is called, so that
  // the sidemenu on mobile/tablet slides out of view.
  changeLanguage = event => {
    let id = event.currentTarget.id;
    this.setState({
      preferredLocale: id
    });
    localStorage.setItem("preferredLocale", id);
    this.menuBackdropClickHandler();
  };

  // Enables us to control which nav theme is displayed, either light or dark.
  changeTheme = theme => {
    this.setState({
      navTheme: theme
    });
  };

  render() {
    let menuBackdrop;
    // If menuSideBarOpen in state is true, assign the component
    // value to the menuBackDrop variable, which is returned below.
    if (this.state.menuSideBarOpen) {
      menuBackdrop = <Backdrop click={this.menuBackdropClickHandler} />;
    }

    return (
      <div className="App">
        {/* 
            LocaleContext.Provider allows consuming components to subscribe to context changes.
            It accepts a value prop (in this case, the preferredLocale in state) and passes it to 
            consuming components that are descendents of this provider. This means that all rendered 
            translations will correspond to the language value of the prop.
        */}
        <LocaleContext.Provider value={this.state.preferredLocale}>
          <Suspense fallback={<LoadingSpinner />}>
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
                  <Home
                    {...routeProps}
                    changeTheme={this.changeTheme}
                    lang={this.state.preferredLocale}
                  />
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
                  <Contact
                    {...routeProps}
                    changeTheme={this.changeTheme}
                    lang={this.state.preferredLocale}
                  />
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
          </Suspense>
        </LocaleContext.Provider>
      </div>
    );
  }
}

export default App;
