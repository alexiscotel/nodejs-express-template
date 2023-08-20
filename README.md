# NodeJS Express Template

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/alexiscotel/nodejs-express-template?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/alexiscotel/nodejs-express-template?style=flat&logo=appveyor)


## Description 

*The what, why, and how:* 

NodeJS template for a REST API with Express. Serve routes **get, post, put, patch, delete**. serve also root file at **/**. Use .env file to configure

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Installation

*Steps required to install project and how to get the development environment running:*

* use `npm install` to install dependencies
* create **.env** file

## Usage 

Use `/` to get root Request response, 

use `/file` to get rootFile srving from **PUBLIC_DIR** *.env* value, 

You can use also `/get, /post, /put, /patch, /delete`, with URL and body params

Complete theses files with your logic :
	* `router/index.js` for routing
	* `controllers/ctrl.js` for main logic
	* `middlewares/mid.js` for intercepting request

You can deactive serving root route in `app/router/index.js`

```js
router.get('/', mid.middleware, ctrl.serveRootFile);
```

to use directly in `app/index.js` with theses recommanded lines :

```js
// ! Choose one of above to serve static files

// serve PUBLIC_DIR/* files
app.use(express.static(buildPath));

// serve route
app.get('/', (req, res, next) => {
	res.send('Hello nodejs-template !');
});

```

## Questions?

For any questions, please contact me with the information below:

GitHub: [@alexiscotel](https://api.github.com/users/alexiscotel)

<img src="https://avatars.githubusercontent.com/u/12951899?v=4" alt="alexiscotel" width="5%" />

