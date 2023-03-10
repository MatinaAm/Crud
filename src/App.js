import React from "react";
// import "./style.css";
import Users from "./Views/Users";
import { Provider } from "react-redux";
// import store from './store';

import store from "./store/store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/Header";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Header />

          <div>
            <Switch>
              <Users />
         
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}
