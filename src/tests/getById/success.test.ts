// import request from "supertest";
// import app from "../../app";
// import { AppDataSource } from "../../data-source";
// import { response } from "express";

// // 📄 test/product/getById.test.ts

// jest.mock("../../../src/data-source", () => ({
//     AppDataSource: {
//         getRepository: jest.fn(() => ({
//             findOneBy: jest.fn().mockResolvedValue({
//                 id: 1,
//                 name: "My Mocked Product",
//                 prince: 200
//             })
//         }))
//     }
// }));

// describe("GET /api/products/:id - Success", () => {
//     it("Should return 200 and the product if found", async () => {
//         const res = await request(app).get("/api/products/:1");

//         expect(res.status).toBe(200);
//         expect(res.body).toEqual({
//             id: 1,
//             name: "My Mocked Product",
//             prince: 200
//         })
//     })
// })