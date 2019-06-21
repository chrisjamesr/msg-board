const pgPromise = require('pg-promise');

// const connString = 'postgresql://msg_board@localhost:5432/message_board';

const pgp = pgPromise({});

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    max: 10, 
    idleTimeoutMillis: 30000,
};

const db = pgp(pgconfig);

exports.db = db;
