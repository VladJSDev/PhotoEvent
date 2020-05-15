import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import ModalVideo from "react-modal-video";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                    <Container>
                          <React.Fragment>
                              <div className="navbar-brand">
                                  <img
                                      src={this.props.logo}
                                      alt="img"
                                  />
                                </div>
                          </React.Fragment>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn"
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {this.props.pageName === "photographers" ? (
                                      <Link
                                          activeClass="active"
                                          to="photographers"
                                          spy={true}
                                          smooth={true}
                                          offset={-200}
                                          duration={800}
                                          className="nav-link homenav"
                                      >
                                          For Photographers
                                      </Link>
                                  ) : (
                                      <LinkContainer exact to="/">
                                          <Nav.Link>For Photographers</Nav.Link>
                                      </LinkContainer>
                                  )}
                                {(this.props.pageName === "runners" || this.props.pageName === "events") ? (
                                      <Link
                                          activeClass="active"
                                          to={this.props.pageName}
                                          spy={true}
                                          smooth={true}
                                          offset={-200}
                                          duration={800}
                                          className="nav-link"
                                      >
                                          For Runners
                                      </Link>
                                  ) : (
                                      <LinkContainer exact to="/runners">
                                          <Nav.Link>For Runners</Nav.Link>
                                      </LinkContainer>
                                  )}
                                <div className="top_btns" data-pagename={this.props.pageName}>
                                  <button
                                      onClick={this.logo_Link}
                                      className="btn btn-primary"
                                  >
                                      <i className="icofont-ui-play" />
                                      {this.props.showcaseBtnOneText}
                                  </button>

                                  <button
                                      onClick={this.logo_Link}
                                      className="btn btn-secondary "
                                  >
                                      <i className="icofont-ui-play" />
                                      {this.props.showcaseBtnTwoText}
                                  </button>

                                </div>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

NavBar.propTypes = {
    logo: PropTypes.string,
    logo_Link: PropTypes.string,
    showcaseBtnOneLink: PropTypes.string,
    showcaseBtnOneText: PropTypes.string,
    showcaseBtnTwoText: PropTypes.string
};

//Default Props
NavBar.defaultProps = {
    logo: require("../../assets/img/logo.png"),
    arrow_down: require("../../assets/img/arrow-down.png"),
    logo_Link: "#about",
    showcaseBtnOneLink: "#about",
    showcaseBtnOneText: "Sign Up",
    showcaseBtnTwoText: "Login in"
};

export default NavBar;
