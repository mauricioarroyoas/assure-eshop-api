import request from "supertest";
import app from "../../app";

describe("Get /api/products/:id - Invalid ID", () => {
    it("should return 400 status if product ID is invalid", async () => {
        const res = await request(app).get("/api/products/abc");
        
        expect(res.status).toBe(400);
        // expect(res.body).toBe({error: "Invalid product ID"});

    })
  })