import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../template/Button";
import Panel from "../template/Panel";
import * as TagAction from "../tag/Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class NovoArtigo extends Component {

    componentWillMount() {
        this.props.findAllTags();
    }

    getListOptionsTag() {
        return this.props.tags.map((tag, indice) => (<option key={indice}>{tag.name}</option>))
    }

    render() {
        return (
            <div>
                <Link to={"/artigo/novo"}>
                    <Button size="small" color="primary">
                        <i className="fa fa-plus"></i> &nbsp; Novo
                    </Button>
                </Link>
                <br/>
                <br/>
                <Panel type="primary" title="Novo Artigo">
                    <form>
                        <div className="form-group" >
                            <label>:</label>
                            <input type="" className="form-control"/>   
                        </div>

                        <div className="form-group" >
                            <label>:</label>
                            <input type="" className="form-control" />   
                        </div>
                        
                        <div className="form-group" >
                            <label>Tags:</label>
                            <select className="form-control" >
                                <option value="" >Selected one tag</option>
                                {this.getListOptionsTag()}                       
                            </select>   
                        </div>
                    </form>
                </Panel>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ tags: state.tag.tags });
const mapDispatchToProps = (dispatch) => bindActionCreators({ findAllTags: TagAction.listar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NovoArtigo);