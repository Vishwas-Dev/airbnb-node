import { dbConfig } from "../../config/index.js"

const Config = {

    development : {
        username: dbConfig.DB_USERNAME,
        password: dbConfig.DB_PASSWORD,
        database: dbConfig.DB_NAME,
        host: dbConfig.DB_HOST,
        dialect: 'mysql',


    }
}

export default Config;