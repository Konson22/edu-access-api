require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const authRoute = require('./routes/auth')

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(cors({origin: ['http://localhost:3000', 'https://edu-access2.onrender.com/', 'https://edu-access.onrender.com'], credentials: true}));

app.use(cors({origin: '*' }));

app.use(express.static('public'));

app.use('/auth', authRoute)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`running on ${PORT}`));

