import React, { Component } from "react";

//Components List
import NavBar from "../components/common/NavBar";
import EventShowcase from "../components/versionOne/eventShowcase";

class Events extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="events" />
                {/* Showcase: src/components/versionOne/Showcase */}
                <EventShowcase pageName="events" id={this.props.location.state}/>
            </React.Fragment>
        );
    }
}

export default Events;
