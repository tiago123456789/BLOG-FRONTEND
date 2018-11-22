import React, { Component } from "react";
import { Link } from "react-router-dom";
import Panel from "../template/Panel";
import Button from "../template/Button";

export default class NovaTag extends Component {

    render() {
        return (
            <div>
                <Button size="sm" color="primary">
                    <i className="fa fa-close"></i> Salvar
                </Button>&nbsp;
                <Button size="sm" color="danger">
                    <Link to={"/tag"}><i className="fa fa-close text"></i>&nbsp;
                        <span className="text-black">Cancelar</span>
                    </Link>
                </Button>
                <Panel type="primary" title="Nova tag">

                </Panel>
            </div>
        )
    }
}