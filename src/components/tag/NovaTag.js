import React, { Component } from "react";
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
                    <i className="fa fa-close"></i> Cancelar
                </Button>
                <Panel type="primary" title="Nova tag">

                </Panel>
            </div>
        )
    }
}