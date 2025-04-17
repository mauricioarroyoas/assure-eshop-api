import { Product } from "../entities/Product";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

export const productRepository: Repository<Product> = AppDataSource.getRepository(Product);