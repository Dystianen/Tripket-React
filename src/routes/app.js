import {AnimatedSwitch} from "react-router-transition";
import {Redirect, Route, Switch} from "react-router-dom";
import {PublicRoute} from "../components/PublicRoute";
import {Login} from "../components/pages/Login";
import App from "../components/pages/App";
import Home from "../components/pages/Home";

export const AppRoute = () => {
    return <Switch>
        <Route path={"/app/home"}>
            <Home/>
        </Route>
        <Route path="/app" exact>
            <Redirect to={'/app/home'} />
        </Route>
    </Switch>
}
