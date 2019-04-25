import React from "react";

const Subnav = () => (
  <nav className="Subnav navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">Articles</a>
        <a className="navbar-item">Badges</a>
        <a className="navbar-item">Tags</a>
        <a className="navbar-item is-active">Polls</a>
      </div>
    </div>
  </nav>
);

export default Subnav;
