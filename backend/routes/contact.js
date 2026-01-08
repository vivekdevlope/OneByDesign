const express = require('express');
const Contact = require('../models/Contact');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public: Anyone can submit
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields required' });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Message sent!', data: contact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Protected: Only admin can see all messages
router.get('/queries', protect, async (req, res) => {
  try {
    const queries = await Contact.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




// @route   DELETE api/contact/:id
// @desc    Delete a contact query
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Message not found' });
    }

    await contact.deleteOne(); // or contact.remove() depending on Mongoose version
    res.json({ message: 'Message removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




module.exports = router;