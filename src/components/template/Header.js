import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
    <header className="main-header">
        <a href="#" className="logo">
            <span className="logo-mini"><b>B</b></span>
            <span className="logo-lg"><b>Blog</b></span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu" >
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/logout" >
                            <i className="fa fa-sign-out" ></i>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);