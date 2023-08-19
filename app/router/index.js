const express = require('express');
const router = express.Router();

// ? branch your controllers here
// * format : const ctrl = require('./path/to/ctrl');
const ctrl = require('../controllers/ctrl');

// ? branch your middlewares here
// * format : const mid = require('./path/to/mid');
const mid = require('../middlewares/mid');

// ? branch your routes here
// * format : router.get('/path', mid.middleware, ctrl.get);

// * example
// router.get('/', mid.middleware, ctrl.rootRequest);
router.get('/', mid.middleware, ctrl.serveRootFile);
router.get('/get/:param', mid.middleware, ctrl.getRequest);
router.post('/post', mid.middleware, ctrl.postRequest);
router.put('/put/:param', mid.middleware, ctrl.putRequest);
router.delete('/delete', mid.middleware, ctrl.deleteRequest);
router.patch('/patch', mid.middleware, ctrl.patchRequest);

module.exports = router;