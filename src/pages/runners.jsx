import React, { Component } from "react";

//Components List
import NavBar from "../components/common/NavBar";
import RunnerShowcase from "../components/versionOne/runnerShowcase";

class Runners extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="home" />
                {/* Showcase: src/components/versionOne/Showcase */}
                <RunnerShowcase />
            </React.Fragment>
        );
    }
}

export default Runners;
