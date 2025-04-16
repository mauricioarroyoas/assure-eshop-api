import { Router } from "express";
import { getAll, addProducts } from "../controllers/product.controller";

const router = Router();
router.get("/", getAll);

router.post("/add", addProducts);

export default router;



