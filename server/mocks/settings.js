/*jshint node:true*/
module.exports = function(app) {
    var express = require('express');
    var settingsRouter = express.Router();
    var settings = {
        lights: true,
        curtains: false,
        temperature: 25
    };

    settingsRouter.get('/', function(req, res) {
        res.json({settings});
    });

    settingsRouter.put('/', function(req, res) {
        var property = req.body.property,
            value = req.body.value;
        settings[property] = value;

        res.json({settings});
    });

    app.use('/api/settings', require('body-parser').json());
    app.use('/api/settings', settingsRouter);
};
