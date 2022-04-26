import jwt from 'jsonwebtoken';
import config from './config';
import { Types } from 'mongoose';

export const generateToken = (sub: Types.ObjectId) => {
  return jwt.sign({ sub }, config.JWT_SECRET, {
    expiresIn: '1h',
  });
};
