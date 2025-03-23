const express = require('express');
const Bug = require('./bugSchema'); // Import the bug schema
const router = express.Router();

// GET /bugs: Retrieve all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /bugs: Create a new bug
router.post('/', async (req, res) => {
  const bug = new Bug({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    const newBug = await bug.save();
    res.status(201).json(newBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /bugs/:id: Update bug details
router.put('/:id', async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });

    bug.title = req.body.title;
    bug.description = req.body.description;
    bug.status = req.body.status;

    const updatedBug = await bug.save();
    res.json(updatedBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /bugs/:id: Delete a bug
router.delete('/:id', async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });

    await bug.remove();
    res.json({ message: 'Bug deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
