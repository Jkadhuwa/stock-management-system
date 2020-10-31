import 'dotenv/config';
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      error: 'Please Login to continue.'
    });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
    if (error) {
      return res.status(401).json({
        error: 'Please Login to continue.'
      });
    }
    // if (decoded) {
    //   const identifier = token.match(/\d+/g).join('');
    //   const droppedToken = await DroppedToken.findOne({
    //     where: { identifier },
    //     logging: false
    //   });

    //   // Return user logged out message
    //   if (droppedToken) {
    //     return res.status(401).send({
    //       message: 'You are already logged out!'
    //     });
    //   }
    // }
    req.userData = decoded;
    return true;
  });

  next();
  return true;
};


export default verifyToken;
