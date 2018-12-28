import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../template/Button"
import Panel from "../template/Panel";
import HtmlService from "../../service/HtmlService";

import { findAll, remove } from "./Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ContentArticle = ({ content }) => <div>{content}</div>;

class ListaArtigo extends Component {

    constructor(props) {
        super(props);
    }

    getArticles() {
        return this.props.articles.map((article, indice) => {
            return (
                <Panel type="primary" key={indice} title={article.title}>
                    <div key={indice} dangerouslySetInnerHTML={{ __html: HtmlService.transformStringHtmlToHtml(article.content) }} />
                    <div className="pull-right">
                        <Button size="xs" color="danger" action={() => this.props.remove(article._id)}>
                            <i className="fa fa-trash"></i>
                        </Button>
                        &nbsp;
                        <Link to={`/artigo/${article._id}/editar`}>
                            <Button size="xs" color="warning">
                                <i className="fa fa-pencil"></i>
                            </Button>
                        </Link>
                    </div>
                </Panel>
            )
        });
    }

    componentDidMount() {
        this.props.findAll();
    }

    render() {
        return (
            <div>
                <Link to={"/artigo/novo"}>
                    <Button size="small" color="primary">
                        <i className="fa fa-plus"></i> &nbsp; Novo
                    </Button>
                </Link>
                <br />
                <br />
                {this.getArticles()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ tags: state.tag.tags, articles: state.article.articles })
const mapDispatchToProps = (dispatch) => bindActionCreators({ findAll: findAll, remove: remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaArtigo);