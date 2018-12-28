import React, {Component} from "react";
import {HashRouter} from "react-router-dom";
import Header from './template/Header';
import SideBar from './template/SideBar';
import WrapperContent from "./template/WrapperContent";
import App from "../config/App";
import CredentialService from "../service/CredentialService";
import AuthService from "../service/AuthService";


export default class PainelAdmin extends Component {

    constructor(props) {
        super(props);
        this._credencialService = new CredentialService();
        this._authService = new AuthService();
        this._timeInterval = null;
    }

    async updateCredentials() {
        const refreshToken = this._credencialService.getRefreshToken();
        const credentials = await this._authService.loginByRefreshToken(refreshToken);
        this._credencialService.store(credentials);
    }

    componentDidMount() {
        this._timeInterval = setInterval(async () => {
            await this.updateCredentials();
        }, App.TIME_UPDATE_CREDENTIALS_MILLISECONDS);
    }

    componentWillUnmount() {
        if (this._timeInterval) {
            this._timeInterval.cleanInterval();
        }
    }

    render() {
        return (
        <HashRouter >
            <div>
                <Header logout={this.logout} />
                <SideBar />
                <WrapperContent >
                    {this.props.children}
                </WrapperContent>
            </div>
        </HashRouter>
        )
    }
}