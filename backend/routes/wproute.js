const express = require('express');
const router = express.Router();
const {sendSms}  = require('../controllers/send-sms.conroller');
// Route to send SMS notifications
router.post('/send-sms-notifications', sendSms);

// Export the router
module.exports = router;