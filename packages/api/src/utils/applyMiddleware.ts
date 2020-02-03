import {Router} from "express"

interface Wrapper {
  (router: Router): void
}

function applyMiddleware(middleware: Wrapper[], app: Router) {
  for (const f of middleware) {
    f(app);
  }
}

export default applyMiddleware
