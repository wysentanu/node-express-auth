import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validateRequest = function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const errorsData = validationResult(req);
  if (!errorsData.isEmpty()) {
    return res.status(422).json({
      errors: errorsData.array(),
    });
  }

  next();
};

export default validateRequest;
