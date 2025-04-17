import request from "supertest";
import express from "express";
import { createGetByIdHandler } from "../../controllers/product.controller";

describe("GET /api/products/:id - Success", () => {
  it("Should return 200 and the product if found", async () => {
    const mockRepo = {
      findOneBy: jest.fn().mockResolvedValue({
        id: 1,
        name: "My Mocked Product",
        price: 200,
      }),
    };

    const app = express();
    app.use(express.json());
    app.get("/api/products/:id", createGetByIdHandler(mockRepo as any));

    const res = await request(app).get("/api/products/1");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: "My Mocked Product",
      price: 200,
    });
  });
});
