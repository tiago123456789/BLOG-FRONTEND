import React, { Component } from "react";
import { Link } from "react-router-dom";

import Panel from "../template/Panel";
import Button from "../template/Button";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { modifiedDataForm, save } from "./Actions";

class NovaTag extends Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    save() {
        this.props.save({ name: this.props.name })
    }

    render() {
        return (
            <div>

                <Panel type="primary" title="Nova tag">
                    <form onSubmit={this.save}>
                        <div className="form-group col-md-6 col-sm-8 col-xs-12">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome"
                                   onChange={(event) => this.props.modifiedDataForm("name", event.target.value)}
                                   value={this.props.name} className="form-control"/>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 col-sm-12">
                            <input type="submit" value="Salvar" className="btn btn-primary" />&nbsp;
                            <Button  color="danger">
                                <Link to={"/tag"}><i className="fa fa-close text"></i>&nbsp;
                                    <span className="text-black">Cancelar</span>
                                </Link>
                            </Button>
                        </div>
                    </form>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { name: state.tag.name };
};
const mapDispathToProps = (dispatch) => {
    return bindActionCreators({ modifiedDataForm: modifiedDataForm, save: save }, dispatch);
};
export default connect(mapStateToProps, mapDispathToProps)(NovaTag);