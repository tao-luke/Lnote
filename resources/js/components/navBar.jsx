import { NavLink, Link } from "react-router-dom";
import React, { Component } from "react";

<nav
    className="navbar navbar-expand-lg navbar-light bg-light"
    style={{ background: "linear-gradient(to right, #ffefba, #ffffff)" }}
>
    <Link to="/" className="navbar-brand" style={{ cursor: "pointer" }}>
        Luke
    </Link>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/backend">
                    Backend
                </NavLink>
            </li>
        </ul>
    </div>
</nav>;
