import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Panel from "../template/Panel";
import { changeFieldInput, save } from "./Actions";
import {bindActionCreators} from "redux";

class NovaCategoria extends Component {

    save() {
        this.props.save({ description: this.props.description });
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ save: save, changeFieldInput: changeFieldInput }, dispatch)
};

export default connect(null, mapDispatchToProps)(NovaCategoria);