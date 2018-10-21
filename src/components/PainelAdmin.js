import React, { Component } from "react";
import Header from './template/Header';
import SideBar from './template/SideBar';
import WrapperContent from "./template/WrapperContent";

export default class PainelAdmin extends Component {

    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <WrapperContent >
                    <h1></h1>
                </WrapperContent>
            </div>
        )
    }
}