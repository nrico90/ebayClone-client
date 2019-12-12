import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AdvListContainer from "./components/AdvList/AdvListContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/advertisements" component={AdvListContainer} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
