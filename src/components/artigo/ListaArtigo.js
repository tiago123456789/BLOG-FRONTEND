import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../template/Button"
import Panel from "../template/Panel";
import { findAll } from "./Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ListaArtigo extends Component {

    getArticles() {
        return this.props.articles.map(article => {
            return (
                <Panel type="primary" title={article.title}>
                    {article.content}
                </Panel>
            )
        }) 
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
const mapDispatchToProps = (dispatch) => bindActionCreators({ findAll: findAll }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaArtigo);