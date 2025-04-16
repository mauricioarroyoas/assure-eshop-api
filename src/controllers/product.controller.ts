import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

export const getAll = async (req: Request, res: Response) => {
  try {
    const productRepo = AppDataSource.getRepository(Product);
    const products = await productRepo.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    if (!name || price === undefined) {
      res.status(400).json({ error: "Name and price are required" });
    }

    const productRepo = AppDataSource.getRepository(Product);
    const newProduct = productRepo.create({ name, price });
    await productRepo.save(newProduct);
    res.status(201).json(newProduct); // Ensure a return here
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ error: "Internal Server Error" }); // Ensure a return here as well
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid product ID" });
    }

    const productRepo = AppDataSource.getRepository(Product);
    const product = await productRepo.findOneBy({ id });

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
