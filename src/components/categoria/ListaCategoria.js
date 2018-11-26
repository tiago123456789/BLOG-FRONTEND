import React, { Component } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Button from "../template/Button";
import Panel from "../template/Panel";

class ListaCategoria extends Component {

    constructor(props) {
        super(props);
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
                        </tbody>
                    </table>
                </Panel>
            </div>
        )
    }
}

export default connect(null, null)(ListaCategoria);