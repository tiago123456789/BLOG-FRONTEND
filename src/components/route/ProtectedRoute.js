import React, { Component } from "react";
import { Route, Redirect } from "react-dom";
import AuthService from "../../service/AuthService";

export default class ProtectedRoute extends Component {

    constructor(props) {
        super(props);
        this._authService = new AuthService();
    }

    async componentWillMount() {
        const hasPermissionAccess = await this._authService.hasAccess();
        if (!hasPermissionAccess) {
            // this.props.history.push("/auth");
        }        
    }

    render() {
        return (<h1>sdfasdfsad</h1>)
    }
}