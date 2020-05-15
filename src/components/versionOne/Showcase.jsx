import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <div id="photographers" className="main-banner bg-gray">

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 resp_banner">
                                      <div className="banner-img">
                                          <img
                                              src={this.props.showcaseImage}
                                              alt="img"
                                          />
                                      </div>
                                  </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="main-banner-content">
                                            <div dangerouslySetInnerHTML={{ __html: this.props.showcasenName }} />
                                            <p>
                                                {this.props.showcaseDescription}
                                            </p>
                                            <button
                                                onClick={this.showcaseBtnOneLink}
                                                className="btn btn-primary "
                                            >
                                                <i className="icofont-ui-play" />
                                                {this.props.showcaseBtnOneText}
                                            </button>
                                            <ModalVideo
                                                channel="youtube"
                                                isOpen={this.state.isOpen}
                                                videoId="vr0qNXmkUJ8"
                                                onClose={() =>
                                                    this.setState({
                                                        isOpen: false
                                                    })
                                                }
                                            />
                                            <button
                                                onClick={this.openModal}
                                                className="btn btn-secondary "
                                            >
                                                <i className="icofont-ui-play" />
                                                {this.props.showcaseBtnTwoText}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 resp_banner_hide">
                                        <div className="banner-img">
                                            <img
                                                src={this.props.showcaseImage}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

//Props Types
Showcase.propTypes = {
    showcasenName: PropTypes.string,
    showcaseDescription: PropTypes.string,
    showcaseImage: PropTypes.string,
    showcaseBtnOneLink: PropTypes.string,
    showcaseBtnOneText: PropTypes.string,
    showcaseBtnTwoText: PropTypes.string
};

//Default Props
Showcase.defaultProps = {
    showcasenName: "<h1>Get Your Event Photo Now !! <br /> No more searching your photo.</h1>",
    showcaseDescription:
        "Immediately send your photo to you via Line Bot, you don't have to waste your time to searching your photo any more",
    showcaseImage: require("../../assets/img/Screen_Shot.png"),
    showcaseBtnOneLink: "#about",
    showcaseBtnOneText: "Sign Up",
    showcaseBtnTwoLink: "//www.youtube.com/watch?v=vr0qNXmkUJ8",
    showcaseBtnTwoText: "Watch video"
};

export default Showcase;
