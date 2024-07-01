
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));

const sql = `CREATE TABLE students(
    student_id INTEGER PRIMARY KEY, 
    name TEXT NOT NULL,
    school TEXT NOT NULL,
    grade TEXT NOT NULL, 
    index_no NULL, 
    profile_image TEXT,
    password TEXT NOT NULL
)`;

db.run(sql)
