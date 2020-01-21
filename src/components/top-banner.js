import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { ReactComponent as LogoSVG } from "../assets/images/logo-dispute-resolver-white.svg";

class TopBanner extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" id="header">
        <Navbar.Brand
          href="https://kleros.io"
          style={{ padding: "0", margin: "0" }}
        >
          <LogoSVG />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="abs-center-x ">
            <Nav.Link
              className="mx-3"
              href="/create/"
              active={
                (this.props.pathname && this.props.pathname == "/create/") ||
                this.props.pathname == "/"
              }
            >
              Create
            </Nav.Link>
            <Nav.Link
              className="mx-3"
              href="/interact/"
              active={
                this.props.pathname && this.props.pathname == "/interact/"
              }
            >
              Interact
            </Nav.Link>
          </Nav>
          <Nav className="abs-end-x " />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBanner;
