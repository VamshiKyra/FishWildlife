import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav> */}

          {/* <Route path="/" exact component={Index} /> */}
          {/* <Route path="/about/" component={Result} /> */}
          <Header />
          <Search />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default Routers;
