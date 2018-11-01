import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Panel from "../template/Panel";
import { listar } from "./Actions";

class ListaTag extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listar();
    }

    getBodyTable() {
        // console.log(this.props.tags);
        // return this.props.tags.map((tag, indice) => (
        //     <tr key={indice}>
        //         <td>{tag}</td>
        //         <td>
        //             <Button size="sm" color="warning">
        //                 <i className="fa fa-pencil"></i>
        //             </Button>
        //             <Button size="sm" color="danger">
        //                 <i className="fa fa-trash"></i>
        //             </Button>
        //         </td>
        //     </tr>
        // ))
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
                        { this.getBodyTable() }
                    </tbody>
                </table>
            </Panel>
        )
    }
}

const mapStateToProps = (state) => ({ tags: state.tag.tags });
const mapDispathToProps = (dispath) => bindActionCreators({ listar: listar }, dispath);
export default connect(mapStateToProps, mapDispathToProps)(ListaTag);