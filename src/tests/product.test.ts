import request from "supertest";
import app from "../app";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

beforeAll(async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
});

afterAll(async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
});

describe("GET /api/products", () => {
  beforeEach(async () => {
    const productRepo = AppDataSource.getRepository(Product);
    const mockProduct = productRepo.create({
      name: "Test Product",
      price: 9.99,
    });

    await productRepo.save(mockProduct);
  });

  afterEach(async () => {
    await AppDataSource.getRepository(Product).clear();
  });

  it("should return a list of products", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("name");
      expect(res.body[0]).toHaveProperty("price");
    }
  });
});
