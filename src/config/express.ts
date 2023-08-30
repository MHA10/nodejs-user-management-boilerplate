import express, { Express } from "express";
import bodyParser from "body-parser";

const configureExpress = (): Express => {
    const app: Express = express();
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(express.json()); // support json encoded bodies
    return app;
};

export default configureExpress;
