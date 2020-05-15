import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Page from "react-page-loading";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template SCSS Style
import "./assets/scss/style.scss";
import "./assets/scss/responsive.scss";

//Component Import
import Photographers from "./pages/photographers";
import Runners from "./pages/runners";
import Events from "./pages/events";
import ScrollUpBtn from "./components/common/ScrollUpBtn";

import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Page loader={"bar"} color={"#506CEA"} size={9}>
                        <Route
                            render={({ location }) => (
                                <TransitionGroup className="transition-group">
                                    <CSSTransition
                                        key={location.key}
                                        timeout={{ enter: 900, exit: 900 }}
                                        classNames="fade"
                                    >
                                        <section className="route-section">
                                            <Switch location={location}>
                                                <Route
                                                    path="/"
                                                    exact
                                                    component={Photographers}
                                                />
                                                <Route
                                                    path="/runners"
                                                    component={Runners}
                                                />
                                                <Route
                                                    path="/events"
                                                    component={Events}
                                                />
                                            </Switch>
                                        </section>
                                    </CSSTransition>
                                </TransitionGroup>
                            )}
                        />
                        <ScrollUpBtn />
                    </Page>
                </div>
            </div>
        );
    }
}

export default App;
