import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import User from "./page/User";
import Home from "./page/Home";
import { UserProvider } from './store/UserContext';

import "./style/index.css"

function App() {
  return (
    <UserProvider>
      <div className="main-container">
        <h1>Spring Boot with React</h1>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/user">Add User</Link>
          </nav>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
