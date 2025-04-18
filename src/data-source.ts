import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './entities/Product';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: 'postgres',
  password: 'P@ssw0rd',
  database: 'mydblocal',
  synchronize: true,
  logging: true,
  entities: [Product],
  migrations: [],
  subscribers: [],
});