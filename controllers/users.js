const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (email === '' || password === '') {
            return res.status(400).json({
                'status': 'failed',
                'message': 'email and password required'
            });
        }

        const id = `user-${uuidv4()}`;
        const url_avatar = `https://ui-avatars.com/api/?name=${username}`;
        const user = await User.create({ _id: id, username, email, password, url_avatar });

        return res.status(201).json({
            'status': 'success',
            'message': 'user successfully registered',
            'data': user
        });
    }
    catch (error) {
        return res.status(500).json({
            'status': 'failed',
            'message': error.message
        });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === '' || password === '') {
            return res.status(400).json({
                'status': 'failed',
                'message': 'email and password required'
            });
        }

        const user = await User.find({ email: email}).count();

        if (user === 0) {
            return res.status(404).json({
                'status': 'failed',
                'message': 'user not found'
            });
        }

        const token = jwt.sign(
            { email: email, password: email },
            process.env.SECRET_KEY, { expiresIn: '4h'});

        return res.status(200).json({
            'status': 'success',
            'message': 'user successfully logged in',
            'token': token
        });
    } catch (error) {
        return res.status(500).json({
            'status': 'failed',
            'message': error.message
        });
    }
}

exports.logout = async (req, res) => {
    return res.status(200).json({
        'status': 'success',
        'message': 'user successfully logged out'
    });
}