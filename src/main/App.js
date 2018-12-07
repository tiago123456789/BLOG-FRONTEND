import React from "react";
import { HashRouter as Routes, Route, Redirect, Switch } from "react-router-dom";

import PainelAdmin from "../components/PainelAdmin";
import ListaTag from "../components/tag/ListaTag";
import NovaTag from "../components/tag/NovaTag";
import ListaCategoria from "../components/categoria/ListaCategoria";
import NovaCategoria from "../components/categoria/NovaCategoria";
import Login from "../components/auth/Login";
import AuthService from "../service/AuthService";

const authService = new AuthService();
const ProtectedRoute = ({ ...props }) =>  {
    return authService.hasAccess() ? <Route {...props}/> : <Redirect to="/auth"/>;
}

export default () => (
    <Routes>
        <Switch>
            <Route exact path="/auth" component={Login} />
            <PainelAdmin>
                <ProtectedRoute path="/categoria" component={ListaCategoria} />
                <ProtectedRoute path="/categoria/nova" component={NovaCategoria} />
                <ProtectedRoute path="/categoria/:id/editar" component={NovaCategoria} />
                <ProtectedRoute path="/tag/nova" component={NovaTag} />
                <ProtectedRoute path="/tag/:id/editar" component={NovaTag} />
                <ProtectedRoute path="/tag" component={ListaTag} />
            </PainelAdmin>
            <Redirect to="/tag" />
        </Switch>
    </Routes>
)