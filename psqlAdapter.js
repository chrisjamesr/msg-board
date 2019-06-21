const pgPromise = require('pg-promise');

const connString = 'postgresql://msg_board@localhost:5432/message_board';

const pgp = pgPromise({});
const psql = pgp(connString);
exports.psql = psql