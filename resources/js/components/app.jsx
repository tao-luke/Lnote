import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./landing/home";
import navBar from "./navBar";
import Base from "./main/base";
import Log from "./note/log";
import NotFound from "./notFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/log/:id"
                        render={props => <Log {...props} />}
                    ></Route>
                    <Route path="/log" component={Base}></Route>
                    <Route
                        path="/"
                        render={props => <Home {...props} />}
                    ></Route>
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
