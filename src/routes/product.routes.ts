import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import {
  createCreateHandler,
  createGetAllHandler,
  createGetByIdHandler,
} from "../controllers/product.controller";

const router = Router();
const productRepo = AppDataSource.getRepository(Product);

// Notice: No "/products" prefix here
router.get("/", createGetAllHandler(productRepo));
router.post("/", createCreateHandler(productRepo));
router.get("/:id", createGetByIdHandler(productRepo));

export default router;