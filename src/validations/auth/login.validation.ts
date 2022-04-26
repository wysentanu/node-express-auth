import { body } from 'express-validator';

export default [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];
