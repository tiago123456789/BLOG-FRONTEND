import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Button from "../template/Button";
import Panel from "../template/Panel";
import Badge from "../template/Badge";


import * as TagAction from "../tag/Actions";
import * as CategoryAction from "../categoria/Actions"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EditorState } from 'draft-js';
import { addCategory, addTag, removeTag, removeCategory } from "./Actions";

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

    getCategoriesSelected() {
        return this.props.categoriesSelected.map(category => (
            <Badge text={category} remover={() => this.props.removeCategory(category)}/>)
        );
    }

    getTagsSelected() {
        return this.props.tagsSelected.map(tag => (
            <Badge text={tag} remover={() => this.props.removeCategory(tag)}/>)
        );        
    }

    render() {
        return (
            <div>
                <Link to={"/artigo/novo"}>
                    <Button size="small" color="primary">
                        <i className="fa fa-plus"></i> &nbsp; Gravar
                    </Button>
                </Link>
                &nbsp;
                <Link to={"/artigo"}>
                    <Button size="small" color="danger">
                        <i className="fa fa-close"></i> &nbsp; Cancelar
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
                            <Editor
                                editorState={this.state.editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </div>

                        <div className="form-group  col-md-6 col-sm-6 col-xs-6" >
                            <label>Categories:</label>
                            <select className="form-control" onChange={this.props.addCategory}>
                                <option value="" >Selected one category</option>
                                {this.getListOptions(this.props.categories, "description")}
                            </select>
                            <div className="col-md-12">
                                {this.getCategoriesSelected()}
                            </div>
                        </div>

                        <div className="form-group col-md-6  col-sm-6 col-xs-6" >
                            <label>Tags:</label>
                            <select className="form-control" onChange={this.props.addTag}>
                                <option value="" >Selected one tag</option>
                                {this.getListOptions(this.props.tags, "name")}
                            </select>
                            <div className="col-md-12">
                                {this.getTagsSelected()}
                            </div>
                        </div>
                    </form>
                </Panel>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ 
    tagsSelected: state.article.tagsSelected,
    categoriesSelected: state.article.categoriesSelected,
    categories: state.category.categories,
    tags: state.tag.tags
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    findAllCategories: CategoryAction.findAll,
    findAllTags: TagAction.listar,
    addCategory: addCategory,
    addTag: addTag,
    removeCategory: removeCategory,
    removeTag: removeTag
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NovoArtigo);