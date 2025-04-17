import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Product } from "../entities/Product";
import { validateProductId } from "../validators/product.validator";

export const createGetAllHandler = (productRepo: Repository<Product>) => {
  return async (req: Request, res: Response) => {
    try {
      const products = await productRepo.find();
      res.json(products);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
};

export const createCreateHandler = (productRepo: Repository<Product>) => {
  return async (req: Request, res: Response) => {
    try {
      const { name, price } = req.body;

      if (!name || price === undefined) {
        return res.status(400).json({ error: "Name and price are required" });
      }

      const newProduct = productRepo.create({ name, price });
      await productRepo.save(newProduct);
      res.status(201).json(newProduct);
    } catch (err) {
      console.error("Error creating product:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
};

export const createGetByIdHandler = (productRepo: Repository<Product>) => {
  return async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const validation = validateProductId(id);

      if (!validation.valid && validation.error) {
        res.status(validation.error.status).json(validation.error);
        return;
      }

      const product = await productRepo.findOneBy({ id: validation.id });

      if (!product) {
        res.status(404).json({ error: "Product not found" });
        return;
      }

      res.status(200).json(product);
    } catch (err) {
      console.error("Error fetching product by ID:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
};
