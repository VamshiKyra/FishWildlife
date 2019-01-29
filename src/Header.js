import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div id="fwc-header" className="fwc-header">
        <div className="page-logo">
          <a href="https://myfwc.com/">
            <img
              src={require("./logo-fwc-gl.png")}
              alt="Florida Fish and Wildlife Conservation Commission Logo"
              className="logo-img"
            />
          </a>
        </div>
        <h1 id="title-text" className="page-title">
          License and Permit Information Search
        </h1>
      </div>
    );
  }
}

export default Header;
