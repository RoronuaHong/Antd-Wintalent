import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch, hasHistory } from "react-router-dom";
import App from "./App";
import Index from "./subPages/index";
import Others from "./subPages/others";
import NotFound from "../NotFound";

const Routes = () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={ Index } />
                <Route exact path="/home" component={ Index } />
                <Route path="/others" component={ Others } />
                <Route path="*" component={ NotFound } />
            </Switch>
        </App>
    </Router>
);

export default Routes;
