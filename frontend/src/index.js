import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Productscreen from "./Screens/Productscreen";
import Cards from "./components/Cards";
import Signin from "./Screens/Signin";
import "./main.css";
import store from "./store";
import CartScreen from "./Screens/CartScreen";
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
          </div>
          <Switch>
            <Route path="/products/:id" component={Productscreen} />
            <Route path="/" exact={true} component={Cards} />
            <Route path="/signin" component={Signin} />
            <Route path="/cart/:id?" component={CartScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
