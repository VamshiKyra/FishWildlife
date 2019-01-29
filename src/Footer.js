import React, { Component } from "react";
import "./Header.css";
class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <div id="fwc-footer" class="fwc-footer">
          <p>
            Florida Fish and Wildlife Conservation Commission • Farris Bryant
            Building
            <br />
            620 S. Meridian St. • Tallahassee, FL • (850) 488-4676
            <br />
            <span class="small">v. 4.9</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
