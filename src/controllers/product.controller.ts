import { Request, Response } from "express";

let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Keyboard', price: 150 },
  { id: 3, name: 'Mouse', price: 50 },
];

export const getAll = (req: Request, res: Response) => {  
  res.json(products);
}

export const addProducts = (req: Request, res: Response) => {

  const {id, name, price} = req.body;
  const newProduct = {id, name, price};

  products = [...products, newProduct];

  res.status(201).json(newProduct);
}