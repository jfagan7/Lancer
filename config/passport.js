const localStrategy = require('passport-local');
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

