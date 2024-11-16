// const config = require('config');

// module.exports = function (req, res, next) {
  //   // Log cookies to check what is available
  //   console.log('Request Cookies:', req.cookies);
  
  //   // Retrieve the token from cookies
  //   const token = req.cookies.token; // Ensure this matches the cookie name
//   if (!token) {
  //     console.log('No token found in cookies');
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, config.get('jwtSecret'));
//     console.log("Decoded part is ", decoded);

//     // Attach user data from token to the request object
//     req.user = decoded.user;
//     console.log('Decoded User:', req.user);

//     // Call the next middleware or route handler
//     next();
//   } catch (err) {
  //     console.error('Token verification error:', err);
  //     res.status(401).json({ msg: 'Token is not valid' });
  //   }
  // };
//   const jwt = require('jsonwebtoken');

//   const auth = (req, res, next) => {
//     const token = req.header('x-auth-token');
//     console.log('Token received:', token);
//     const decoded = jwt.decode(token);  // Decodes without verification
// console.log(decoded);
//     if (!token) {
//       console.error('No token provided');
//       return res.status(401).json({ msg: 'No token, authorization denied' });
//     }
  
//     const secretKey = process.env.JWT_SECRET_KEY;
//     if (!secretKey) {
//       console.error('Secret key is not set in environment variables');
//       return res.status(500).json({ msg: 'Internal server error' });
//     }
//     console.log('Secret Key:', secretKey);
  
//     try {
//       console.log('Verifying token...');
//       const decoded = jwt.verify(token, secretKey);
//       req.user = decoded;
//       console.log('Decoded Token:', decoded);
//       next();
//     } catch (err) {
//       console.error('Token verification failed:', err.message);
//       return res.status(401).json({ msg: 'Token is not valid' });
//     }
//   };
  
//   // Export the auth middleware function
//   module.exports =  auth ;
  
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token')?.split(' ')[1];  // Extract the token from 'Bearer <token>'
  console.log('Token received:', token);

  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Decode the token without verification to inspect its contents
  const decoded = jwt.decode(token);
 // console.log('Decoded token (without verification):', decoded);

  // Check if token is expired
  if (decoded && decoded.exp) {
    const currentTime = Math.floor(Date.now() / 1000);  // Current time in seconds
    if (decoded.exp < currentTime) {
      console.log('Token has expired');
      return res.status(401).json({ msg: 'Token has expired' });
    }
  }

  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) {
    console.error('Secret key is not set in environment variables');
    return res.status(500).json({ msg: 'Internal server error' });
  }

  console.log('Secret Key:', secretKey);

  try {
    console.log('Verifying token...');
    const decoded = jwt.verify(token, secretKey, { algorithms: ['HS256'] });  // Specify the algorithm
    req.user = decoded;  // Store decoded info in the request
    console.log('Decoded Token:', decoded);  // Log the decoded token
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(401).json({ msg: 'Token is not valid' });  // Send invalid token response
  }
};

module.exports = auth;
