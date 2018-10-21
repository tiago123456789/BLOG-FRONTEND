import React, { Component } from "react";
import menu from "../../Menu";

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.menu = menu;
    }

    hasChildrens(itemMenu) {
        return itemMenu.hasOwnProperty("childrens");
    }

    getClassCssToItem(item) {
        let classCss = "";
        if (item.active) classCss += "active ";
        if (this.hasChildrens(item)) classCss += "treeview";
        return classCss;
    }

    buildMenu(menu) {
        return menu.map((item, indice) => {
            return this.hasChildrens(item) ? (
                <li key={indice} className={this.getClassCssToItem(item)}>
                            <a href="#">
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                { this.buildMenu(item.childrens)}
                            </ul>
                </li>) :
                (<li key={indice} className={this.getClassCssToItem(item)}>
                    <a href="#">
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </a>
                </li>)
        });
    }

    componentWillMount() {
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        { this.buildMenu(this.menu) }
                    </ul>
                </section>
            </aside>
        )
    }
}
