require('dotenv').config();
const jwt = require('jsonwebtoken');
const generateAccessToken = require('../config/accessToken');

// Login
exports.login = (req, res) => {
   // Token Authenticate User
   const username = req.body.username;
   const user = { name: username };

   const accessToken = generateAccessToken(user);
   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
   refreshTokens.push(refreshToken);
   res.json({
      accessToken: accessToken,
      refreshToken: refreshToken
   });
}

// Refresh Token
let refreshTokens = [];

exports.token = (req, res) => {
   const refreshToken = req.body.token;

   if(refreshToken == null) return res.sendStatus(401);

   if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403);

      // Create access token
      const accessToken = generateAccessToken({ name: user.name });
      res.json({ accessToken: accessToken });
   });
}

// Logout
exports.logout = (req, res) => {
   refreshTokens = refreshTokens.filter(token => token !== req.body.token);
   res.sendStatus(204);
}