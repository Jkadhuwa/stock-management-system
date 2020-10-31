import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const { JWT_SECRET_KEY } = process.env;

export const generateToken = (user) => jwt.sign(
  {
    name: user.name,
    email: user.email,
    role: user.role,
    jobId: user.job_id
  },
  JWT_SECRET_KEY,
  { expiresIn: '1h' },
);

export const hashPassword = (password) => bcrypt.hash(password, 10);

export const comparePasswords = (
  password, hashedPassword,
) => bcrypt.compare(password, hashedPassword);
