const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

router.post('/', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

module.exports = router;
