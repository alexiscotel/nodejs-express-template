require('dotenv').config();

exports.middleware = (req, res, next) => {
	console.log('middleware ...');
	next();
}