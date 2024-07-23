const express = require('express');
const { sendingGemini } = require('../Controller/GeminiApiControllers');
 
const router = express.Router();
 
router.post('/gemini',sendingGemini)

module.exports = router;