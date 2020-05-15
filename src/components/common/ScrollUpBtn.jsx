import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button";

class ScrollUpBtn extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <ScrollUpButton
                    style={{
                        backgroundColor: "#131111",
                        padding: 8,
                        borderRadius: 50,
                        width: 40,
                        height: 40
                    }}
                />
            </React.Fragment>
        );
    }
}

export default ScrollUpBtn;
