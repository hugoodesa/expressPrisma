import App from "./app/app.js";
import config from "./config/index.js";
import routes from "./routes/routes.js";
import server from "./server/index.js";

const port = config.port;

const app = new App(routes, server, port);

app.initApp();
