import React, { Component } from "react";
import { Link } from "react-router-dom";

import Panel from "./template/Panel";
import WrapperContent from "./template/WrapperContent";
import ArtigoService from "../service/ArtigoService";
import HtmlService from "../service/HtmlService";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.articleService = new ArtigoService();
    }

    removeClassUnnecessaryInBody() {
        document.querySelector("body").className = "";
    }

    getArticles() {
        return this.state.articles.map((article, indice) => (
            <Panel type="default" key={indice}>
                <div key={indice} dangerouslySetInnerHTML={{ __html: HtmlService.transformStringHtmlToHtml(article.content) }} />
                <div>
                    <div>
                        <i className="fa fa-sitemap"></i> {article.category}
                    </div>
                    <div>
                        <i className="fa fa-tag"></i> {article.tags}
                    </div>
                    <div>
                        <i className="fa fa-user"></i>&nbsp; {article.author.name}
                    </div>
                </div>
            </Panel>
        ));
    }

    componentWillUnmount() {
        document.querySelector("body").className = "skin-blue sidebar-mini";
    }

    async componentWillMount() {
        this.removeClassUnnecessaryInBody();
        const articles = await this.articleService.findAll();
        this.setState({ articles: articles });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default" style={{ "borderRadius": "0px" }}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                BLOG
                            </a>
                        </div>

                        <Link to="/auth">
                            <button type="button" class="btn btn-default navbar-btn pull-right">Sign in</button>
                        </Link>

                    </div>
                </nav>
                <div className="container">
                    {this.getArticles()}
                </div>
            </div>

        )
    }
}