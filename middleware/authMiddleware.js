import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

// Middleware to protect routes and check if the user is authenticated
// This middleware checks for a JWT token in the request headers, verifies it, and attaches the user to the request object.
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// // Middleware for admin to check admin user or not
// const adminOnly = (req, res, next) => {
//   if(req.user && req.user.role ==="admin"){
//     next();
//   }else{
//     res.status(403).josn({message:"Access denied only for admin user only"})
//   }
// }

export { protect };