const pgp = require('./node_modules/pg-promise') ({
    query: e => {
        console.log('QUERY:', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'apple_co',
    user: 'ranger'
}

const db = pgp(options);

module.exports = db;