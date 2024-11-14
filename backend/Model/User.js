const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Basic fields for signup
  name: {
    type: String,
    required: true, // Required during signup
  },
  email: {
    type: String,
    required: true, // Required during signup
    unique: true,  // Ensures the email is unique
  },
  password: {
    type: String,
    required: true, // Required during signup
  },

  
  profile: { 
    type: String,
    default: '',
  },
    address: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
  

 
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('User', UserSchema);
