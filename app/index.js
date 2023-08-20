require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const buildPath = path.join(__dirname, process.env.PUBLIC_DIR);
// # > EXPRESS CONFIG
const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// # < EXPRESS CONFIG

// # > ROUTER
const router = require('./router');
app.use('/', router);
// # < ROUTER

// # > AUTH 
const auth = require('nodejs-auth-sqlite3')
app.use('/auth', auth.authRoutes);
app.use('/admin', auth.checkAuth, (req, res) => {
	res.status(200).json('Hello admin!');
});
app.get('/profile', auth.checkAuth, (req, res) => {
	jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_KEY, (err, decoded) => {
		if (err) {
			return res.status(401).json('token_not_valid');
		} else {
			res.status(200).json(['Hello my profile!', decoded]);
		}
	});
});


// * serve app
module.exports = app;