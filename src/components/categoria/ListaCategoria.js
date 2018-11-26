import React, { Component } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";

import Panel from "../template/Panel";
import Button from "../template/Button";
import { findAll } from "./Actions";

class ListaCategoria extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.findAll();
    }

    getBodyTable() {
        return this.props.categories.map((item, indice) => {
            return (
                <tr key={indice}>
                    <td>{item.description}</td>
                    <td>
                        <Link to={`/tag/${tag._id}/editar`} className="btn btn-sm btn-warning" >
                            <i className="fa fa-pencil"></i>
                        </Link>&nbsp;
                        <Button size="sm" color="danger" action={() => this.props.remove(tag._id)}>
                            <i className="fa fa-trash"></i>
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <Link to={"/categoria/nova"}>
                    <Button size="small" color="primary">
                        <i className="fa fa-plus"></i> &nbsp; Nova
                    </Button>
                </Link>
                <br/>
                <br/>
                <Panel type="primary" title="Categorias">
                    <table className="table table-striped text-center">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.getBodyTable()}
                        </tbody>
                    </table>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ categories: state.category.categories });
const mapDispatchToProps = (dispatch) => bindActionCreators({ findAll: findAll }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListaCategoria);