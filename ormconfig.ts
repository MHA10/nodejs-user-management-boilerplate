import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import dotenv from "dotenv";
dotenv.config();

const rootDir = __dirname + "/src/db";

const defaultConfig = {
    url: process.env.DATABASE_URL ?? "",
    host: process.env.DB_HOST ?? "",
    port: parseInt(process.env.DB_PORT!) ?? NaN,
    username: process.env.DB_USERNAME ?? "",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_DATABASE ?? "",
    synchronize: false,
    logging: !(
        process.env.NODE_ENV === "production" ||
        process.env.NODE_ENV === "staging"
    ),
    entities: [rootDir + "/entities/*.{js,ts}"],
    migrations: [rootDir + "/migrations/*.{js,ts}"],
    migrationsTableName: "migration",
    namingStrategy: new SnakeNamingStrategy(),
    cli: {
        entitiesDir: [__dirname + "/src/db/entities/"],
        migrationsDir: [__dirname + "/src/db/migrations/"],
    },
    ssl: {
        rejectUnauthorized: false,
    },
};

export default defaultConfig;
