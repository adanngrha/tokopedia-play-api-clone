const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const url_avatar = `https://ui-avatars.com/api/?name=${username}`;

        const user = await User.create({ username, email, password, url_avatar });

        return res.status(201).json({ message: "User created", data: user });
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