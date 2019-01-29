import React, { Component } from "react";
import "./App.css";
import Routers from "./Routers";
class App extends Component {
  render() {
    return (
      <Routers />
      // <div className="App">
      //   <header className="App-header">
      //     <h1>Shopping List for {this.props.name}</h1>
      //     <ul>
      //       <li>Instagram</li>
      //       <li>WhatsApp</li>
      //       <li>Oculus</li>
      //     </ul>
      //     <button
      //       className="square"
      //       onClick={function() {
      //         alert("click");
      //       }}
      //     >
      //       List All Licenses
      //     </button>

      //   </header>
      // </div>
    );
  }
}

export default App;
