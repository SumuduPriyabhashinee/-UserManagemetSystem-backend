const express = require('express');
const routeConstant = require('../common/route-constant');
const config = require('../common/environment.json')[process.env.NODE_ENV || 'local'];

module.exports = function (app) {
    const API_PREFIX = '/api';

    app.get('/', function (req, res) {
        res.send('===========================================================\nWelcome to Blog Site  API - V - ' + config.VERSION+'\n==============================================================');
    });

    app.use(API_PREFIX + routeConstant.USER.PREFIX, require('./userRoute'));
    // app.use(API_PREFIX + routeConstant.DEPT.PREFIX, require('./departmentRoute'));

}