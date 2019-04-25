import React from "react";

import "./Navbar.scss";

const Navbar = () => (
  <nav
    className="MainNavbar navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">News</a>

        <a className="navbar-item">People</a>

        <a className="navbar-item is-active">Admin</a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Shoutouts</a>
          <div className="navbar-dropdown">
            <a className="navbar-item">Send</a>
            <a className="navbar-item">Received</a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">Primary</a>
            <a className="button is-secondary">Secondary</a>
            <a class="button is-danger">Danger</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
