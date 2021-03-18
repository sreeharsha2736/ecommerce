import React from "react";
import ReactDOM from "react-dom";
import Maincontent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import Topheader from "./components/Topheader";
import Topmenu from "./components/Topmenu";
import "./main.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-content">
          <Topheader />
          <Topmenu />
          <Maincontent />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
