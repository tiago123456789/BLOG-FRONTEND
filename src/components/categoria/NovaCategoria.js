import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { toastr } from "react-redux-toastr";

import Panel from "../template/Panel";
import { changeFieldInput, save, update, findById } from "./Actions";
import {bindActionCreators} from "redux";

class NovaCategoria extends Component {

    constructor(props) {
        super(props);
    }

    checkFieldsValid() {
        let invalidFields = [];
        const descricao = this.props.description;

        if (descricao == null || descricao.length == 0) {
            invalidFields.push("description");
        }

        const existFieldsInvalids = invalidFields.length > 0;
        if (existFieldsInvalids) {
            toastr.error("Category", `The fields: ${invalidFields.join(",")} are invalids!`)
        }

        return !existFieldsInvalids;
    }

    save() {
        const id = this.getIdCategoryEdition();
        if (this.checkFieldsValid()) {
            if (id) {
                this.props.update(id, { description: this.props.description })
            } else {
                this.props.save({ description: this.props.description });
            }
        }
    }

    getIdCategoryEdition() {
        return this.props.match.params.id;
    }

    componentWillMount() {
        const id = this.getIdCategoryEdition();
        if (id) {
            this.props.findById(id);
        }
    }

    render() {
        return (
            <div>
                <Panel type="primary" title="Categoria">
                    <form onSubmit={() => this.save()}>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" value={this.props.description}
                                   onChange={(event) => this.props.changeFieldInput(event.target.value) }
                                   id="descricao" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Gravar" className="btn btn-primary"/>&nbsp;
                            <Link to={"/categoria"} className="btn btn-danger">
                                Cancelar
                            </Link>
                        </div>
                    </form>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ description: state.category.description });
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        findById: findById, update: update,
        save: save, changeFieldInput: changeFieldInput
    }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(NovaCategoria);