require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: ['http://localhost:3000', 'https://edu-access2.onrender.com/', 'https://edu-access.onrender.com'], credentials: true}));
app.use(cookieParser());


app.use(express.static('images'));



const PORT = process.env.PORT || 3002

app.listen(PORT, () => console.log(`running USSD server on ${PORT}`));

