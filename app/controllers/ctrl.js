const fs = require('fs');

exports.rootRequest = async (req, res, next) => {
	console.log('root request');
	res.status(200).json({message: 'root request'});
};

exports.serveRootFile = async (req, res, next) => {
	const publicPath = process.env.PUBLIC_DIR;

	// check if at least one file is present in the publicPath folder
	const files = fs.readdirSync(publicPath);
	if (files.length === 0) {
		res.status(404).json({message: 'No file found in public folder'});
		return;
	}
	// check if file with name like index.html or whatever root file is present in the publicPath folder
	const pulicRootFile = files.find(file => file.match(/^index\.[a-z]+$/));
	if (!pulicRootFile) {
		res.status(404).json({message: 'No root file found in public folder'});
		return;
	}
	res.sendFile(pulicRootFile, { root: publicPath });
};


exports.getRequest = async (req, res, next) => {
	console.log('get request', req.params);
	res.status(200).json({message: 'get request', params: req.params, body: req.body});
};

exports.postRequest = async (req, res, next) => {
	console.log('post request', req.body);
	res.status(200).json({message: 'post request', body: req.body});
};

exports.putRequest = async (req, res, next) => {
	console.log('put request');
	res.status(200).json({message: 'put request', params: req.params, body: req.body});
};

exports.patchRequest = async (req, res, next) => {
	console.log('patch request');
	res.status(200).json({message: 'patch request', params: req.params, body: req.body});
};

exports.deleteRequest = async (req, res, next) => {
	console.log('delete request');
	res.status(200).json({message: 'delete request', params: req.params, body: req.body});
};