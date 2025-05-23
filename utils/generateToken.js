import jwt from 'jsonwebtoken';

// This function generates a JWT token using the user's ID and a secret key from environment variables.
// The token is set to expire in 2 hours.
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
};

export default generateToken;