import request from "supertest";
import app from "../app";
import { send } from "process";

describe("GET /api/products", () => {
  it("should return a list of products", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Optional: Check structure of one product
    // if (res.body.length > 0) {
    //   expect(res.body[0]).toHaveProperty("id");
    //   expect(res.body[0]).toHaveProperty("name");
    //   expect(res.body[0]).toHaveProperty("price");
    // }
  });
});

// Post request
describe("POST /api/products/add", () => {
  it("should return newProduct and a 201 statuts code", async () =>{
    const newProduct = {id: 5, name: "Nintendo Switch", price: 510}
    const res = await request(app).post("/api/products")
    .send(newProduct);

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(newProduct);
  })
})