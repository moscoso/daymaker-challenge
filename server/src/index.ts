import * as express from 'express';
import * as mysql from 'mysql';

// Production
const databaseConfig = {
    user: 'root',
    database: 'daymaker',
    password: 'daymaker',
    socketPath: '/cloudsql/daymaker-cm:us-central1:daymaker',
};
// Localhost
// const databaseConfig = {
//     user: 'root',
//     database: 'daymaker',
//     password: 'daymaker',
//     host:  'localhost',
//     port: 3306,
// };

console.log(databaseConfig);

const db: mysql.Connection = mysql.createConnection(databaseConfig);

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`MySql Connected`);
});

const app = express();

const port = process.env.PORT || 8080;

// Add headers
app.use((req, res, next) => {

    const isProduction = databaseConfig['socketPath'] != null;
    if (isProduction) {
        // Whitelist for firebase app
        res.setHeader('Access-Control-Allow-Origin', 'https://daymaker-cm.firebaseapp.com');
    } else {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    }
    // Pass to next layer of middleware
    next();
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.send(`Connected on port ${port}`);
});

app.get('/opportunities', (req, res) => {
    const sql = `SELECT * FROM giving_opportunity`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send(result);
    });
});

app.get('/pool/:opportunityID', (req, res) => {
    const gender = req.query.gender;
    const minAge = req.query.minAge;
    const maxAge = req.query.maxAge;

    let sql = `SELECT * FROM give_pool INNER JOIN child on give_pool.child_id=child.id WHERE (giving_opportunity_id = ${req.params.opportunityID}) AND (give_pool.id NOT IN (SELECT give_pool_id FROM claim))`;

    const hasValidGenderFilter = gender !== undefined && (gender === 'm' || gender === 'f');
    if (hasValidGenderFilter) {
        sql += ` AND (child.gender = '${gender}')`;
    }

    const hasValidMinAgeFilter = minAge !== undefined;
    if (hasValidMinAgeFilter) {
        sql += ` AND (child.age >= ${minAge})`;
    }

    const hasValidMaxAgeFilter = maxAge !== undefined;
    if (hasValidMaxAgeFilter) {
        sql += ` AND (child.age <= ${maxAge})`;
    }

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(results);
        }
    });
});

app.get('/claim/:poolID', (req, res) => {
    const sql = `INSERT INTO claim (\`id\`, \`give_pool_id\`) VALUES (NULL, ${req.params.poolID})`;
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(results);
        }
    });
});
