// controllers/contact.Controller.js
const Contact = require('../models/contact.model');

const addContact = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;
    const newContact = new Contact({ name, email, mobile, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

module.exports = { addContact, getAllContacts };
