import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch, hasHistory } from "react-router-dom";
import App from "./App";
import Index from "./subPages/index";
import Subs from "./subPages/Subs";
import NotFound from "../NotFound";

const Routes = () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={ Index } />
                <Route exact path="/signup" component={ Index } />
                <Route path="/subs" component={ Subs } />
                <Route path="*" component={ NotFound } />
            </Switch>
        </App>
    </Router>
);

export default Routes;
