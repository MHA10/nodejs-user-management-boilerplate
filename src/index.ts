import dotenv from "dotenv";
import configureExpress from "./config/express";
import useRoutes from "./routes";
import { PostgresDataSource } from "./db";
import { init } from "./db/dbConfig";

dotenv.config();

const main = async (): Promise<void> => {
    try {
        const port = process.env.PORT ?? 4000;

        await init(PostgresDataSource);
        const app = configureExpress();
        app.get("/ping", (req, res) => {
            res.status(200).json({
                data: "Pong",
                code: 200,
            });
        });

        app.listen(port, () => {
            console.info(`Server listening on port: ${port}`);
        });
        // app.use(jwtCheck); // server to server authentication from ORCA API
        useRoutes(app); // app routes defined
    } catch (error) {
        console.log("Error ::: ", error);
    }
};

main();
