import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Button from "../template/Button";
import Panel from "../template/Panel";

import * as TagAction from "../tag/Actions";
import * as CategoryAction from "../categoria/Actions"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EditorState } from 'draft-js';

class NovoArtigo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.setState({ editorState });
    }

    componentWillMount() {
        this.props.findAllTags();
        this.props.findAllCategories();
    }

    getListOptions(itens, labelKey) {
        return itens.map((item, indice) => (<option key={indice}>{item[labelKey]}</option>))
    }

    render() {
        return (
            <div>
                <Link to={"/artigo/novo"}>
                    <Button size="small" color="primary">
                        <i className="fa fa-plus"></i> &nbsp; Novo
                    </Button>
                </Link>
                <br />
                <br />
                <Panel type="primary" title="Novo Artigo">
                    <form>
                        <div className="form-group" >
                            <label>Title:</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group" >
                            <label>Content:</label>
                            <Editor style={{ "border": "1px solid black" }}
                                editorState={this.state.editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </div>

                        <div className="form-group" >
                            <label>Categories:</label>
                            <select className="form-control" >
                                <option value="" >Selected one category</option>
                                {this.getListOptions(this.props.categories, "description")}
                            </select>
                        </div>

                        <div className="form-group" >
                            <label>Tags:</label>
                            <select className="form-control" >
                                <option value="" >Selected one tag</option>
                                {this.getListOptions(this.props.tags, "name")}
                            </select>
                        </div>
                    </form>
                </Panel>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ categories: state.category.categories, tags: state.tag.tags });
const mapDispatchToProps = (dispatch) => bindActionCreators({
    findAllCategories: CategoryAction.findAll,
    findAllTags: TagAction.listar
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NovoArtigo);