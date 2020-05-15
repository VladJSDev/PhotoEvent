import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

class Footer extends Component {
    render() {
        //Support loop start
        const supportLinks = this.props.supportsLinks.map((support, index) => (
            <li key={index}>
                <a href={support.Link}>
                    <i className="icofont-double-right" />
                    {support.Name}
                </a>
            </li>
        ));
        //Support loop END

        return (
            <React.Fragment>
                <footer className="footer-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer">
                                    <h4 className="logo">
                                        <a href="#home">
                                            Axo<span>lot</span>
                                        </a>
                                    </h4>
                                    <p>{this.props.siteDescription}</p>
                                    <a
                                        href={this.props.btnLink}
                                        className="btn btn-primary"
                                    >
                                        {this.props.btnText}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer footer-navbar-nav">
                                    <h3>{this.props.usefullLinksTitle}</h3>
                                    <ul>
                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a className="" href="#home">
                                                    <i className="icofont-double-right" />
                                                    Home
                                                </a>
                                            ) : (
                                                <NavLink
                                                    className=""
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    Home
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a href="#features">
                                                    <i className="icofont-double-right" />
                                                    Features
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    Features
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a className="" href="#about">
                                                    <i className="icofont-double-right" />
                                                    About
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    About
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            {this.props.pageName === "home" ? (
                                                <a
                                                    className=""
                                                    href="#services"
                                                >
                                                    <i className="icofont-double-right" />
                                                    Services
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to="/"
                                                    activeClassName=""
                                                >
                                                    <i className="icofont-double-right" />
                                                    Services
                                                </NavLink>
                                            )}
                                        </li>

                                        <li>
                                            <NavLink to="/">
                                                <i className="icofont-double-right" />
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/contact"
                                                activeClassName=""
                                            >
                                                <i className="icofont-double-right" />
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer">
                                    <h3>{this.props.supportTitle}</h3>
                                    <ul>{supportLinks}</ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer">
                                    <h3>{this.props.contactInfoTitle}</h3>
                                    <p>{this.props.contactInfoText}</p>
                                    <ul className="contact-info">
                                        <li>
                                            <i className="icofont-google-map" />
                                            {this.props.address}
                                        </li>
                                        <li>
                                            <i className="icofont-phone" />
                                            {this.props.phone}
                                        </li>
                                        <li>
                                            <i className="icofont-envelope" />
                                            {this.props.email}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <p>{this.props.copyRightText}</p>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <ul>
                                        {this.props.fbLink && (
                                            <li>
                                                <Link
                                                    to={this.props.fbLink}
                                                    className="icofont-facebook"
                                                />
                                            </li>
                                        )}

                                        {this.props.twitterlLink && (
                                            <li>
                                                <Link
                                                    to={this.props.twitterlLink}
                                                    className="icofont-twitter"
                                                />
                                            </li>
                                        )}

                                        {this.props.instagramlLink && (
                                            <li>
                                                <Link
                                                    to={
                                                        this.props
                                                            .instagramlLink
                                                    }
                                                    className="icofont-instagram"
                                                />
                                            </li>
                                        )}

                                        {this.props.linkedinlLink && (
                                            <li>
                                                <Link
                                                    to={
                                                        this.props.linkedinlLink
                                                    }
                                                    className="icofont-linkedin"
                                                />
                                            </li>
                                        )}

                                        {this.props.vimeolLink && (
                                            <li>
                                                <Link
                                                    to={this.props.vimeolLink}
                                                    className="icofont-vimeo"
                                                />
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

//Props Types
Footer.propTypes = {
    siteDescription: PropTypes.string,
    btnText: PropTypes.string,
    btnLink: PropTypes.string,

    usefullLinksTitle: PropTypes.string,

    supportTitle: PropTypes.string,
    supportsLinks: PropTypes.array,

    contactInfoTitle: PropTypes.string,
    contactInfoText: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,

    fbLink: PropTypes.string,
    twitterlLink: PropTypes.string,
    instagramlLink: PropTypes.string,
    linkedinlLink: PropTypes.string,
    vimeolLink: PropTypes.string
};

//Default Props
Footer.defaultProps = {
    siteDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. sed do eiusmod tempor incididunt ut, tempor incididunt ut.",
    btnText: "Read More",
    btnLink: "#",

    usefullLinksTitle: "Useful Links",

    supportTitle: "Support",
    supportsLinks: [
        {
            Name: "Career",
            Link: "#"
        },
        {
            Name: "Support",
            Link: "#"
        },
        {
            Name: "Resource",
            Link: "#"
        },
        {
            Name: "Strategy",
            Link: "#"
        },
        {
            Name: "FAQ",
            Link: "#"
        },
        {
            Name: "Contact",
            Link: "#"
        }
    ],

    contactInfoTitle: "Contact Info",
    contactInfoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    address: "2750 Quadra Street , Park Area, Victoria, Canada.",
    phone: "+(00) 01245687",
    email: "support@axolot.com",

    copyRightText: "Copyright \u00a9 2019 All Rights Reserved.",
    fbLink: "#",
    twitterlLink: "#",
    instagramlLink: "#",
    linkedinlLink: "#",
    vimeolLink: "#"
};
export default Footer;
