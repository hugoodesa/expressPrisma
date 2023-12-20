import express from "express";

export default class App {
  constructor(routes, server, port) {
    this.routes = routes;
    this.server = server;
    this.port = port;

    this.initializateMiddleWares();
  }

  initializateMiddleWares() {
    this.usingJson();
    this.middlewareRoutes();
  }

  usingJson() {
    this.server.use(express.json());
  }

  middlewareRoutes() {
    this.server.use(this.routes);
  }

  initApp() {
    this.server.listen(this.port, () => {
      console.log(`server running on http://localhost:${this.port}`);
    });
  }
}
