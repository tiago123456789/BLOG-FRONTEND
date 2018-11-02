import React, { Component } from "react";
import { HashRouter , Route} from "react-router-dom";
import Header from './template/Header';
import SideBar from './template/SideBar';
import WrapperContent from "./template/WrapperContent";
import ListaTag from "./tag/ListaTag";
import NovaTag from "./tag/NovaTag";


export default class PainelAdmin extends Component {

    render() {
        return (
        <HashRouter >
            <div>
                <Header />
                <SideBar />
                <WrapperContent >
                    <Route exact path="/tag" component={ListaTag}/>
                    <Route exact path="/tag/nova" component={NovaTag}/>
                </WrapperContent>
            </div>
        </HashRouter>
        )
    }
}