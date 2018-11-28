import React from "react";
import { HashRouter as Routes, Route, Redirect, Switch } from "react-router-dom";

import PainelAdmin from "../components/PainelAdmin";
import ListaTag from "../components/tag/ListaTag";
import NovaTag from "../components/tag/NovaTag";
import ListaCategoria from "../components/categoria/ListaCategoria";
import NovaCategoria from "../components/categoria/NovaCategoria";

export default () => (
    <Routes>
        <Switch>
            <PainelAdmin>
                <Route exact path="/categoria" component={ListaCategoria}/>
                <Route exact path="/categoria/nova" component={NovaCategoria}/>

                <Route exact path="/tag" component={ListaTag}/>
                <Route exact path="/tag/nova" component={NovaTag}/>
                <Route exact path="/tag/:id/editar" component={NovaTag}/>
            </PainelAdmin>
            <Redirect to="/tag" />
        </Switch>
    </Routes>
)