const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../Model/User');

// User Login Handler
async function handleUserLogin(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const { name, _id: objId } = user;
        const token = jwt.sign({ name, email, objId }, process.env.JWT_SECRET_KEY, {
            expiresIn: 86400, // 24 hours
        });

        return res.json({ user: { name, email }, token, msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
}

// User Registration Handler
async function handleUserRegistration(req, res) {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPass });
        await user.save();

        const { _id: objId } = user;
        const token = jwt.sign({ name, email, objId }, process.env.JWT_SECRET_KEY, {
            expiresIn: 86400, // 24 hours
        });

        return res.json({ user: { name, email }, token });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
}
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.objId;
    console.log("User ID:", userId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if there's a new profile image uploaded
    const profilePath = req.file ? req.file.path : user.image; // Fallback to existing profile path if no new file
      console.log("image " , profilePath);
    // Prepare the updated user data
    const updatedUserData = {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      profile: profilePath,
      phone: req.body.phone || user.phone,
      bio: req.body.bio || user.bio,
    };

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    res.json(updatedUser); // Send updated user data as response
  } catch (error) {
    console.error("Error in updateProfile:", error);
    res.status(500).json({ msg: 'Server error' });
  }
};

  
// Delete Profile Handler
const deleteProfile = async (req, res) => {
  try {
    const userId = req.user.objId; // Get user ID from decoded JWT

    // Find and delete the user from the database
    console.log("v" ,userId);
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Respond with a success message
    res.json({ msg: 'User profile deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
// User Profile Retrieval Handler
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.objId; // Get user ID from decoded JWT

    const user = await User.findById(userId).select('-password'); 
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user); // Send user data as JSON response
  } catch (error) {
    console.error("Error in getUserProfile:", error);
    res.status(500).json({ msg: 'Server error' });
  }
};


// Export functions
module.exports = {
    handleUserLogin,
    handleUserRegistration,
    updateProfile,
    deleteProfile,
    getUserProfile
};
