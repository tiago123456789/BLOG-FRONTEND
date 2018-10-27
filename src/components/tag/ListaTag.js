import React, { Component } from "react";
import Panel from "../template/Panel";

export default class ListaTag extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel type="primary" title="Tags">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tag 1</td>
                            <td>
                                <button className="btn btn-warning">
                                    <i className="fa fa-pencil"></i>
                                </button>&nbsp;
                                <button className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Panel>
        )
    }
}