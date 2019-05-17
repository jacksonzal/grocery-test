import React from "react";
import { Route, Switch } from "react-router-dom";

import Add from "../../add/pages";
import { Home } from "../../home/pages";

const ROUTES = [{ component: Home, path: "" }, { component: Add, path: "add" }];

export default function Router() {
  return (
    <Switch>
      {ROUTES.map(({ path, component }) => (
        <Route key={`R${path}`} exact={true} path={`/${path}`} component={component} />
      ))}
    </Switch>
  );
}
