import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../template/Button"
import Panel from "../template/Panel";
import { findAll } from "./Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ListaArtigo extends Component {

    getBodyTable() {
        
    }
    componentDidMount() {
        this.props.findAll();
        console.log(this.props.articles);
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
                <Panel type="primary" title="Artigos">
                        <table className="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    {/* <NotFoundRegister display={!this.hasCategories()} /> */}
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ articles: state.article.articles })
const mapDispatchToProps = (dispatch) => bindActionCreators({ findAll: findAll }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaArtigo);