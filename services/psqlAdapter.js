require('dotenv').config();
const pgPromise = require('pg-promise');

// const connString = 'postgresql://msg_board@localhost:5432/message_board';

const pgp = pgPromise({});

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    // max: 10, 
    // idleTimeoutMillis: 30000,
};

const db = pgp(config);

// db.one('select * from messages limit 1')
//     .then(res=> {
//         console.log(res);
//     })
//     .catch(err=> console.log(err));
    

exports.db = db;

// const pool = new pg.Pool(config);

// pool.on('connect', () => {
//     console.log(`connected to the Database on port ${config.port}`)
// })

// const createTables = () => {
//     const messageTable = `CREATE TABLE IF NOT EXISTS
//         messages(
//             id SERIAL PRIMARY KEY,
//             content VARCHAR(288) NOT NULL
//             )`;
//     pool.query(messageTable)
//     .then((res) => {
//         console.log(res);
//         pool.end();
//     })
//     .catch((err)=> {
//         console.log(err);
//         pool.end();
//     });
// };

// pool.on('remove', () => {
//     console.log('client removed');
//     process.exit(0);
// })

// require('make-runnable');