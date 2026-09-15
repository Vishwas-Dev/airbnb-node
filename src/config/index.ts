// this file contains all the configuration logic for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
    PORT: number;
}

type DbConfig = {
    DB_HOST: string;
    DB_NAME: string;
    DB_PASSWORD: string;
    DB_USERNAME: string;
}

function loadEnv() {
    dotenv.config();
}
loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};

export const dbConfig: DbConfig = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_NAME: process.env.DB_NAME || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "root",
    DB_USERNAME: process.env.DB_USERNAME || "test_db"
}
