import request from "supertest";
import express from "express";
import { createGetByIdHandler } from "../../controllers/product.controller";

const mockRepo = {
  findOneBy: jest.fn().mockResolvedValue(null),
};

const app = express();
app.get("/api/products/:id", createGetByIdHandler(mockRepo as any));

describe("GET /api/products/:id - Not Found", () => {
  it("returns 404 if product not found", async () => {
    const res = await request(app).get("/api/products/123");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "Product not found" });
  });
});