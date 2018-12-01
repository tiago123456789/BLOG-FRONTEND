import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeFieldForm, authenticate } from "./Actions";

class Login extends Component {

    constructor(props) {
        super(props);
        this.authenticate = this.authenticate.bind(this);
    }

    authenticate() {
        this.props.authenticate({ email: this.props.email, password: this.props.password });
    }

    render() {
        return (
            <div style={{ "width": "100%", "minHeight": "470px" }}>

                <div className="login-box">
                    <div className="login-logo">
                        <b className="text-white">BLOG</b>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Logar para iniciar sua sessão</p>

                        <form onSubmit={this.authenticate} >
                            <div className="form-group has-feedback">
                                <input type="email"
                                    value={this.props.email}
                                    onChange={(event) => this.props.changeFieldForm("email", event.target.value)}
                                    className="form-control" placeholder="Email" />
                                <span className="fa fa-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password"
                                    value={this.props.senha}
                                    onChange={(event) => this.props.changeFieldForm("password", event.target.value)}
                                    className="form-control" placeholder="Password" />
                                <span className="fa  fa-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-4">
                                    <button type="submit"
                                        className="btn btn-primary btn-block btn-flat">Logar</button>
                                </div>
                            </div>
                        </form>

                        <br />
                        <a className="cursor-pointer">Eu esqueci minha senha</a><br />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ email: state.auth.email, password: state.auth.password });
const mapDispatchToProps = (dispatch) => bindActionCreators(
    { authenticate: authenticate, changeFieldForm: changeFieldForm }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);