// controllers/productController.js
const Product = require('../Model/Product');

// Add new product
exports.addProduct = async (req, res) => {
    try {
        const { name, quantity, price, description, location } = req.body;
        console.log("req.body" , req.body);
        const image = req.file ? req.file.path : null; // If using multer for image handling
        console.log("image" , image);

        const userId = req.user.objId;
        console.log(userId);
        const product = new Product({
            name,
            quantity,
            price,
            description,
            image,
            location,
            userId
        });

        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
    try {
       
        const { name, quantity, price, description, location } = req.body;
        const image = req.file ? req.file.path : null;

        const updatedData = { name, quantity, price, description, location };
        if (image) updatedData.image = image;

        const product = await Product.findOneAndUpdate(
            { userId: req.user.objId }, // Ensure only the owner can update
            updatedData,
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ message: 'Product not found or not authorized' });
        }

        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
    try {
         

        const product = await Product.findOneAndDelete({  userId: req.user.objId }); // Ensure only the owner can delete

        if (!product) {
            return res.status(404).json({ message: 'Product not found or not authorized' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};

// Fetch products by user ID (decoded from token)
exports.getProductsByUserId = async (req, res) => {
    try {
        const products = await Product.find({ userId: req.user.objId });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products by user ID', error });
    }
};

// Fetch all products by location
// exports.getProductsByLocation = async (req, res) => {
//     try {
//         const { location } = req.query;
//         const products = await Product.find({ location });
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching products by location', error });
//     }
// };

// Fetch product by product ID
// exports.getProductById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching product by ID', error });
//     }
// };

// Fetch all products (optional)
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all products', error });
    }
};
