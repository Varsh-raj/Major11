const express = require('express');
const router = express.Router();  // Define the router here
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload = require('../Middleware/Upload');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');
const { handleUserLogin, handleUserRegistration , updateProfile , deleteProfile } = require('../Controller/User');

//login -signup
router.post("/login", handleUserLogin);
router.post("/register", handleUserRegistration);


router.put('/update', auth,upload, updateProfile);

// Route to delete user profile

router.delete('/deleteProfile', auth, deleteProfile);
module.exports = router;
