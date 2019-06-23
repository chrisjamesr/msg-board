const {db} = require('./services/psqlAdapter');

exports.resolver = {
    Query:{
        messages(_, args, context) {
            const messagesQuery = 'SELECT * FROM messages';
            return psql.manyOrNone(messagesQuery);
        }
    }
};

