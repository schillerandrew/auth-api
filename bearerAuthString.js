'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

let user = {
  username: 'andrew',
  password: 'andrew',
};

function generateToken(userToHash) {
  return jwt.sign(userToHash, SECRET);
}

let token = generateToken(user);
console.log('AuthString: ', `Bearer ${token}`);