// import request from "supertest";
// import app from "../../app";
// import { AppDataSource } from "../../data-source";

// // 📄 test/product/getById.test.ts
// jest.mock('../../src/data-source', () => ({
//     AppDataSource: {
//       getRepository: jest.fn(() => {
//         AppDataSource: {
//             getRepository: jest.fn(() => ({
//                 findOneBy: jest.fn()
//             }))
//         }
//       })
//     }
//   }));
  

//   describe("Get /api/products/:id - Product Not Found", () => {
//     it("Should return 404 if product is not found", async () => {
//         const res = await request(app).get("/api/products/289")

//         expect(res.status).toBe(404);
//         expect(res.body).toBe({error: "Product not found"});
//     })
//   })