const sqlite = require('sqlite3').verbose();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createToken } = require('../midlewares/jwt');

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));

const profile_image = '/user.png'


const getUserCredientials = (req, res) => {
    res.json({message:'hii'})
}

// RESGISTER NEW USER
const registerUser = async (req, res) => {
    try {

        const { name, school, grade, index_no, password } = req.body;

        db.get(`SELECT * FROM students WHERE name='${name}' AND school='${school}'`, async (err, user) => {
            if(err) throw err;
            if(user){
                res.status(409).send('Already registered!');
            }else{
                const hashPass = await bcryptjs.hash(password, 4);
                sql = 'INSERT INTO students(name, school, grade, index_no, profile_image, password) VALUES(?,?,?,?,?,?)'
                db.run(sql, [name, school, grade?grade:null, index_no, profile_image, hashPass], async function(err) {
                    if(err) throw err
                    const userCredentials = {student_id:this.lastID, name, school, grade, profile_image}
                    const ACCESS_TOKEN = await createToken(userCredentials);
                    res.cookie('ACCESS_TOKEN', ACCESS_TOKEN, {
                        expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)),
                        httpOnly: true,
                        sameSite: "none",
                        secure: 'false',
                    });
                    res.json({ACCESS_TOKEN, profile:userCredentials})
                })
            }
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


// GET ALL USERS
const getAllUsersController = (req, res) => {
    try{
        db.all('SELECT * FROM students', [], (err, rows) => {
            if(err) throw err;
            res.json(rows)
        })

    }catch(error){
        console.log(error)
    }
}


// LOGIN USER
const loginUser = (req, res) => {
    try {
        const { name, password } = req.body;
        db.get(`SELECT * FROM students WHERE name='${name}'`, async (err, student) => {
            if(err) throw err;
            if(!student) return res.status(404).send('Wrong user name!')
            const verified = await bcryptjs.compare(password, student.password)
            if(!verified){
                return res.status(409).send('Wrong Password!')
            }
            const userCredentials = {student_id:student.student_id, name:student.name, school:student.school, grade:student.grade, profile_image:student.profile_image}
            const ACCESS_TOKEN = await createToken(userCredentials);
            res.cookie('ACCESS_TOKEN', ACCESS_TOKEN, {
                expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)),
                httpOnly: true,
                sameSite: "none",
                secure: 'false',
            });
            res.json({ACCESS_TOKEN, profile:userCredentials})
        })
    } catch (error) {
       res.send('Server Side Error...!')
    }
}
module.exports = {getUserCredientials, registerUser, loginUser, getAllUsersController}