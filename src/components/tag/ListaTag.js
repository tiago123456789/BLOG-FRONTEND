import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Panel from "../template/Panel";
import NotFoundRegister from "./../common/NotFoundRegister"

import { listar, remove } from "./Actions";
import Button from "../template/Button";
import {Link} from "react-router-dom";

class ListaTag extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.listar();
    }

    getBodyTable() {
        return (this.props.tags || []).map((tag, indice) => (
            <tr key={indice}>
                <td>{tag.name}</td>
                <td>
                    <Link to={`/tag/${tag._id}/editar`} className="btn btn-sm btn-warning" >
                        <i className="fa fa-pencil"></i>
                    </Link>&nbsp;
                    <Button size="sm" color="danger" action={() => this.props.remove(tag._id)}>
                        <i className="fa fa-trash"></i>
                    </Button>
                </td>
            </tr>
        ))
    }

    hasTags() {
        return this.props.tags && this.props.tags.length >= 1;
    }

    render() {
        return (
            <div>
                <Link to={"/tag/nova"}>
                    <Button size="small" color="primary">
                        <i className="fa fa-plus"></i> &nbsp; Nova
                    </Button>
                </Link>
                <br/>
                <br/>
                <Panel type="primary" title="Tags">
                    { this.hasTags() &&
                        <table className="table table-striped text-center">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.getBodyTable() }
                            </tbody>
                        </table>
                    }
                    <NotFoundRegister display={!this.hasTags()} />
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ tags: state.tag.tags });
const mapDispathToProps = (dispatch) => bindActionCreators({ listar: listar, remove: remove }, dispatch);
export default connect(mapStateToProps, mapDispathToProps)(ListaTag);