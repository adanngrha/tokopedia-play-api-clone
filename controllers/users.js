const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const bycrypt = require('bcrypt');
const saltRounds = 10;

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const id = `user-${uuidv4()}`;
        const url_avatar = `https://ui-avatars.com/api/?name=${username}`;
        const hashed = await bycrypt.hash(password, saltRounds);
        const user = await User.create({
            _id: id, username, email, password: hashed, url_avatar
        });

        return res.status(201).json({
            'status': 'success',
            'message': 'user successfully registered',
            'data': user
        });
    }
    catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message
        });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.find({ username: username});

        if (user.length === 0) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'user not found'
            });
        }

        const match = await bycrypt.compare(password, user[0].password);

        if (!match) {
            return res.status(400).json({
                'status': 'failed',
                'message': 'password incorrect'
            });
        }

        const token = jwt.sign(
            { username: username, password: password },
            process.env.SECRET_KEY, { expiresIn: '3h'});

        return res.status(200).json({
            'status': 'success',
            'message': 'user successfully logged in',
            'token': token
        });
    } catch (err) {
        return res.status(500).json({
            'status': 'failed',
            'message': err.message
        });
    }
}

exports.logout = async (req, res) => {


    return res.status(200).json({
        'status': 'success',
        'message': 'user successfully logged out'
    });
}