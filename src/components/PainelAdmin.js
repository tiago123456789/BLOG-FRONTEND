import React, {Component} from "react";
import {HashRouter} from "react-router-dom";
import Header from './template/Header';
import SideBar from './template/SideBar';
import WrapperContent from "./template/WrapperContent";
import App from "../config/App";


export default class PainelAdmin extends Component {

    constructor(props) {
        super(props);
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