import { Request, Response } from "express";

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Keyboard', price: 150 },
  { id: 3, name: 'Mouse', price: 50 },
];

export const getAll = (req: Request, res: Response) => {  
  res.json(products);
}