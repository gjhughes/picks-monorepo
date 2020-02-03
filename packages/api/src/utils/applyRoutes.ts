import {Router} from "express";

import {Route} from "../routes/types"

function applyRoutes(routes: Route[], router: Router) {
  for (const route of routes) {
    const {method, path, handler} = route;
    (router as any)[method](path, handler);
  }
}

export default applyRoutes
