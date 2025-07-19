const express = require('express');
const router = express.Router();
const { addContact, getAllContacts } = require('../controllers/contact.Controller');

router.post('/contact', addContact);
router.get('/contacts', getAllContacts);

module.exports = router;
