const express = require('express');
const router = express.Router();  // Define the router here
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload = require('../Middleware/Upload');
const { check, validationResult } = require('express-validator');
const auth = require('../Middleware/Auth');
const { handleUserLogin, handleUserRegistration , updateProfile , deleteProfile } = require('../Controller/User');
const productController = require('../Controller/Product');
//login -signup
router.post("/login", handleUserLogin);
router.post("/register", handleUserRegistration);


router.put('/update', auth,upload.single('profile'), updateProfile);

// Route to delete user profile

router.delete('/deleteProfile', auth, deleteProfile);




router.post('/add', auth, upload.single('image'), productController.addProduct);
router.put('/updateproduct', auth, upload.single('image'), productController.updateProduct); // Update product by ID
router.delete('/deleteproduct', auth, productController.deleteProduct); // Delete product by ID
router.get('/getbyuserid', auth, productController.getProductsByUserId); // Get products by user ID
//router.get('/getlocation', productController.getProductsByLocation); // Get products by location
//router.get('/getbyid/:id', productController.getProductById); // Get product by product ID
router.get('/getallproduct', productController.getAllProducts); // Optional: Get all products

module.exports = router;
