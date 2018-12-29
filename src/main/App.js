import React from "react";
import { HashRouter as Routes, Route, Redirect, Switch } from "react-router-dom";

import PainelAdmin from "../components/PainelAdmin";
import ListaTag from "../components/tag/ListaTag";
import NovaTag from "../components/tag/NovaTag";
import ListaCategoria from "../components/categoria/ListaCategoria";
import NovaCategoria from "../components/categoria/NovaCategoria";
import Login from "../components/auth/Login";
import Home from "../components/Home";
import ListaArtigo from "../components/artigo/ListaArtigo";
import NovoArtigo from "../components/artigo/NovoArtigo";
import EdicaoArtigo from "../components/artigo/EdicaoArtigo";
import AuthService from "../service/AuthService";
import CredentialService from "../service/CredentialService";


const authService = new AuthService();
const credentialService = new CredentialService();

const ProtectedRoute = ({ ...props }) =>  {
    return authService.hasAccess() ? <Route {...props}/> : <Redirect to="/auth"/>;
}

export default () => (
    <Routes>
        <Switch>
            <Route exact path="/auth" component={Login} />
            <Route exact path="/home" component={Home} />            
            <PainelAdmin>
                <ProtectedRoute exact path="/categoria" component={ListaCategoria} />
                <ProtectedRoute exact path="/categoria/nova" component={NovaCategoria} />
                <ProtectedRoute exact path="/categoria/:id/editar" component={NovaCategoria} />
                <ProtectedRoute exact path="/tag/nova" component={NovaTag} />
                <ProtectedRoute exact path="/tag/:id/editar" component={NovaTag} />
                <ProtectedRoute exact path="/tag" component={ListaTag} />
                <ProtectedRoute exact path="/artigo" component={ListaArtigo} />
                <ProtectedRoute exact path="/artigo/novo" component={NovoArtigo} />
                <ProtectedRoute exact path="/artigo/:id/editar" component={EdicaoArtigo} />

                <ProtectedRoute exact path="/logout" render={() => {
                    credentialService.removeAll();
                    return <Redirect to="/auth" />
                }} />
            </PainelAdmin>
            <Redirect to="/auth" />
        </Switch>
    </Routes>
)