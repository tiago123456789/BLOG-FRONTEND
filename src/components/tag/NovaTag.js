import React, { Component } from "react";
import { Link } from "react-router-dom";

import Panel from "../template/Panel";
import Button from "../template/Button";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { modifiedDataForm, save, update, findById } from "./Actions";

class NovaTag extends Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    getIdTagEdition() {
        const id = this.props.match.params.id || null;
        return id;
    }

    save() {
        const id = this.getIdTagEdition();
        if (id) {
            this.props.update(id, { name: this.props.name })
        } else {
            this.props.save({ name: this.props.name })
        }
    }

    componentWillMount() {
        const id = this.getIdTagEdition();
        if (id) this.props.findById(id);
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
    return bindActionCreators({
        update: update, findById: findById,
        modifiedDataForm: modifiedDataForm, save: save
    }, dispatch);
};
export default connect(mapStateToProps, mapDispathToProps)(NovaTag);