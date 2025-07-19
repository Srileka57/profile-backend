// controllers/contact.Controller.js
const Contact = require('../models/contact.model');

const addContact = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // Optional: log incoming data to verify
    console.log('Received contact data:', req.body);

    const newContact = new Contact({ name, email, mobile, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

module.exports = { addContact, getAllContacts };
