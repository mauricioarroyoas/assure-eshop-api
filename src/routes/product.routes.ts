import { Router } from "express";
import { getAll, create, getById } from "../controllers/product.controller";

const router = Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getById);

export default router;
