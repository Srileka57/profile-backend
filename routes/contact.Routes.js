const express = require('express');
const router = express.Router();

const { addContact, getAllContacts } = require('../controllers/contact.Controller');

router.post('/', addContact);
router.get('/', getAllContacts);

module.exports = router;
