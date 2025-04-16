import request from "supertest";
import app from "../app";

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
  it("should return 'Got a post request' and a 200 statuts code", async () =>{
    const res = await request(app).post("/api/products/add");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Got a post request");
  })
})