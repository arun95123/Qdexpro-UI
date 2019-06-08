import React from "react";
// import PropTypes from "prop-types";
// import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./stickyNav.style.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

class StickyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <span style={{ paddingRight: 3 }}>Qdex Pro</span>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/scenario" style={{ textDecoration: "none" }}>
                <NavLink style={{ textDecoration: "none" }}>Scenario</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default StickyNav;
