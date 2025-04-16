import { Router } from "express";
import { getAll, addProducts } from "../controllers/product.controller";
import { validateRequiredFields } from "../middlewares/products.middleware";

const router = Router();
router.get("/", getAll);
router.post("/", addProducts);

export default router;



