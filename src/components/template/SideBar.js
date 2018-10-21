import React, { Component } from "react";
import $ from "../../../public/js/jquery.min"
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

    setItemActive(idItemMenu) {
        $("li.active").removeClass("active");
        $(`#${idItemMenu}`).addClass("active");
    }

    buildMenu(menu) {
        return menu.map((item, indice) => {
            return this.hasChildrens(item) ? (
                <li key={indice} id={item.id}
                    onClick={() => this.setItemActive(item.id)}
                    className={this.getClassCssToItem(item)}>
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
                (<li key={indice} id={item.id}
                     onClick={() => this.setItemActive(item.id)}
                     className={this.getClassCssToItem(item)}>
                    <a href="#">
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </a>
                </li>)
        });
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
