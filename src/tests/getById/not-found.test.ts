import request from "supertest";
import express from "express";
import { createGetByIdHandler } from "../../controllers/product.controller";

describe("GET /api/products/:id - Product Not Found", () => {
  it("Should return 404 if product is not found", async () => {
    // Create mock repo that returns null (not found)
    const mockRepo = {
      findOneBy: jest.fn().mockResolvedValue(null),
    };

    const app = express();
    app.use(express.json());
    app.get("/api/products/:id", createGetByIdHandler(mockRepo as any));

    const res = await request(app).get("/api/products/289");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "Product not found" });
  });
});