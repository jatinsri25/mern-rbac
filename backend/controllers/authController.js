const User = require('../models/User');
const jwt = require('jsonwebtoken');
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !await user.comparePassword(password)) {
      user.failedAttempts += 1;
      if (user.failedAttempts >= 3) {
        user.lockUntil = new Date(Date.now() + 900000); // 15 minutes
      }
      await user.save();
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (user.lockUntil && user.lockUntil > Date.now()) {
      return res.status(401).json({ message: 'Account locked' });
    }

    user.failedAttempts = 0;
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login, register };