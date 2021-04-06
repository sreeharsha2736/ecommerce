import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Maincontent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import Productscreen from "./components/Screens/Productscreen";
// import Topheader from "./components/Topheader";
import Cards from "./components/Cards";
import Signin from "./components/Screens/Signin";
// import Topmenu from "./components/Topmenu";
import "./main.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              {" "}
              <Navbar />
            </div>

            <div className="main-content">
              {/* <Topheader /> */}
              {/* <Topmenu /> */}

              {/* <Maincontent /> */}
            </div>
          </div>
          <Switch>
            <Route path="/product/:id" component={Productscreen} />
            <Route path="/" exact={true} component={Cards} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </Router>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
