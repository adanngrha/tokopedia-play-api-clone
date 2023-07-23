const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.create({ username, email, password });

        return res.status(201).json({ data: user , message: "User created" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.login = async (req, res) => {
    const token = jwt.sign(
        { email: req.body.email, password: req.body.password },
        process.env.SECRET_KEY, { expiresIn: '1h'});

    return res.json({ auth: true, token:token });
}

exports.logout = async (req, res) => {
    return res.json({ auth: false, message: "Logout successfully" });
}