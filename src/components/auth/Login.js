import React, { Component } from "react";

export default class Login extends Component {

    render() {
        return (
            <div style={{ "width": "100%", "min-height": "470px" }}>

                <div className="login-box">
                    <div className="login-logo">
                        <b className="text-white">BLOG</b>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Logar para iniciar sua sessão</p>

                        <form action="../../index2.html" method="post">
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" />
                                    <span className="fa fa-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
                                    <span className="fa  fa-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-4">
                                    <button type="submit"
                                            className="btn btn-primary btn-block btn-flat">Logar</button>
                                </div>
                            </div>
                        </form>

                        <br/>
                        <a className="cursor-pointer">Eu esqueci minha senha</a><br/>
                        {/*<a href="register.html" className="text-center">Register a new membership</a>*/}
                    </div>
                </div>
            </div>
        )
    }
}