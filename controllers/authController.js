const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createToken } = require('../midlewares/jwt');
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


// AUTHENTICATE TOKEN
const authToken = async (req, res) => {
    try{
        res.json(req.user)
    }catch(error){
        res.status(404).send(error)
    }
}

const logOutUser = (req, res) => {
    res.clearCookie("ACCESS_TOKEN");
    res.send('done')
}

// LOGIN USER
const loginUser = (req, res) => {
    try {
        const { email, password } = req.body;
        db.get(`SELECT * FROM users WHERE email='${email}'`, async (err, user) => {
            if(err) throw err;
            if(!user) return res.status(404).send('Wrong Email!')
            const verified = await bcryptjs.compare(password, user.password)
            if(!verified){
                return res.status(409).send('Wrong Password!')
            }
            const userCredentials = {userID:user.id, name:user.name, email:user.email, avatar:user.avatar}
            const ACCESS_TOKEN = await createToken(userCredentials);
            res.cookie('ACCESS_TOKEN', ACCESS_TOKEN, {
                expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)),
                httpOnly: true,
                sameSite: "none",
                secure: 'false',
            });
            res.json(userCredentials)
        })
    } catch (error) {
       res.send('Server Side Error...!')
    }
}

// RESGISTER NEW USER
const registerUser = async (req, res) => {
    try {
        const { name, section, grade, email, password } = req.body;

        db.get(`SELECT * FROM users WHERE email='${email}'`, async (err, user) => {
            if(err) throw err;
            if(user){
                res.status(409).send('Already registered!')
            }else{
                const hashPass = await bcryptjs.hash(password, 4);
                sql = 'INSERT INTO users(name, section, grade, email, avatar, password) VALUES(?,?,?,?,?,?)'
                db.run(sql, [name, section, grade, email, '/images/user.png', hashPass], async function(err) {
                    if(err) throw err
                    const userCredentials = {userID:this.lastID, name, email, avatar:'/images/user.png'}
                    const ACCESS_TOKEN = await createToken(userCredentials);
                    res.cookie('ACCESS_TOKEN', ACCESS_TOKEN, {
                        expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)),
                        httpOnly: true,
                        sameSite: "none",
                        secure: 'false',
                    });
                    res.json(userCredentials)
                })
            }
        })
    } catch (error) {
        res.send('Error')
    }
}

// GET ALL USERS
const getAllUsersController = (req, res) => {
    try{
        db.all('SELECT * FROM users', [], (err, rows) => {
            if(err) throw err;
            res.json(rows)
        })

    }catch(error){
        console.log(error)
    }
}

module.exports = { 
    getAllUsersController, 
    registerUser, 
    authToken,
    loginUser,
    logOutUser
}