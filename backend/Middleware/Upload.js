const multer = require('multer');
const path = require('path');

 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Define the destination folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Unique filename with timestamp
  }
});

// Initialize multer with storage configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },  // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      return cb(new Error('Invalid file type'));
    }
  }
}).fields([
  { name: 'profile', maxCount: 1 },
  { name: 'cropimg', maxCount: 1 }
]);

module.exports = upload;
