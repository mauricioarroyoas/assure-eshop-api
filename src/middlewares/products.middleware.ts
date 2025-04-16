import { Request, Response, NextFunction } from 'express';


export const validateRequiredFields = (req: Request, res: Response, next: NextFunction): void => {
  const requiredFields = ['id', 'name', 'price'];

  if (requiredFields.some(field => req.body[field] === undefined)) {
    res.status(400).json({ message: `Please provide ${requiredFields.join(', ')}.` });
    return;
  }
  next();
};