import React, { Component } from "react";
import { HashRouter , Route} from "react-router-dom";
import Header from './template/Header';
import SideBar from './template/SideBar';
import WrapperContent from "./template/WrapperContent";
import ListaTag from "./tag/ListaTag";


export default class PainelAdmin extends Component {

    render() {
        return (
        <HashRouter >
            <div>
                <Header />
                <SideBar />
                <WrapperContent >
                    <Route path="/tag" component={ListaTag}/>
                </WrapperContent>
            </div>
        </HashRouter>
        )
    }
}