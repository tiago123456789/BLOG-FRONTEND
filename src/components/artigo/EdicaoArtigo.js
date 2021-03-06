import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Button from "../template/Button";
import Panel from "../template/Panel";
import Badge from "../template/Badge";

import TokenService from "../../service/TokenService";
import CredentialService from "../../service/CredentialService";

import * as TagAction from "../tag/Actions";
import * as CategoryAction from "../categoria/Actions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from "draft-js-export-html";

import { convertToRaw,  EditorState, ContentState } from 'draft-js';
import {
    addCategory, addTag, removeTag, update, findById,
    removeCategory, changeDataFieldForm
} from "./Actions";

class EditarArtigo extends Component {

    constructor(props) {
        super(props);
        this.tokenService = new TokenService();
        this.credentialService = new CredentialService();
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.editar = this.editar.bind(this);
    }

    getIdArtigo() {
        return this.props.match.params.id;
    }

    onEditorStateChange(editorState) {
        this.setState({ editorState });
    }

    componentWillMount() {
        this.props.findById(this.getIdArtigo());
        this.props.findAllTags();
        this.props.findAllCategories();
    }

    componentWillReceiveProps() {
        this.setState({ editorState: EditorState.createWithContent(stateFromHTML(this.props.conteudo))});        
    }

    getListOptions(itens, labelKey) {
        return itens.map((item, indice) => (<option key={indice}>{item[labelKey]}</option>))
    }

    getCategoriesSelected() {
        return (this.props.categoriesSelected || []).map((category, indice) => (
            <Badge key={indice} text={category} remover={() => this.props.removeCategory(category)} />)
        );
    }

    getTagsSelected() {
        return (this.props.tagsSelected || []).map((tag, indice) => (
            <Badge key={indice} text={tag} remover={() => this.props.removeTag(tag)} />)
        );
    }

    editar() {
        const content = stateToHTML(this.state.editorState.getCurrentContent());
        const payloadToken = this.tokenService.getPayload(this.credentialService.getAccessToken());
        const artigo = {
            title: this.props.title,
            category: this.props.categoriesSelected,
            tags: this.props.tagsSelected,
            content: content,
            author: {
                id: payloadToken.id,
                name: payloadToken.name
            }
        };
        this.props.update(this.getIdArtigo(), artigo);
        this.setState({ editorState: EditorState.createEmpty() })
    }

    render() {
        return (
            <div>
                <Button size="small" color="primary" action={this.editar}>
                    <i className="fa fa-plus"></i> &nbsp; Gravar
                </Button>
                &nbsp;
                <Link to={"/artigo"}>
                    <Button size="small" color="danger">
                        <i className="fa fa-close"></i> &nbsp; Cancelar
                    </Button>
                </Link>
                <br />
                <br />
                <Panel type="primary" title="Editar Artigo">
                    <form>
                        <div className="form-group" >
                            <label>Title:</label>
                            <input type="text" value={this.props.title}
                                onChange={(event) => this.props.changeDataFieldForm("title", event.target.value)}
                                className="form-control" />
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
const mapStateToProps = (state) => {
    return {
        tagsSelected: state.article.tagsSelected,
        categoriesSelected: state.article.categoriesSelected,
        categories: state.category.categories,
        tags: state.tag.tags,
        title: state.article.title,
        conteudo: state.article.content
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    findAllCategories: CategoryAction.findAll,
    findAllTags: TagAction.listar,
    addCategory: addCategory,
    addTag: addTag,
    removeCategory: removeCategory,
    removeTag: removeTag,
    changeDataFieldForm: changeDataFieldForm,
    update: update,
    findById: findById
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EditarArtigo);