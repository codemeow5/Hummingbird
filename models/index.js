"use strict";

var mongoose = require('mongoose');

exports.Settings = mongoose.model('settings', require('./Settings'));
exports.Category = mongoose.model('category', require('./Category'));
exports.User = mongoose.model('user', require('./User'));
exports.Subscribe = mongoose.model('subscribe', require('./Subscribe'));
exports.Entry = mongoose.model('entry', require('./Entry'));
exports.Feedback = mongoose.model('feedback', require('./Feedback'));
