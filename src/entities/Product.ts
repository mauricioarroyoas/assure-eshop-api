import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('products') // ← match existing table name
export class Product {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ nullable: true })
  name?: string;

  @Column('decimal')
  price: number = 0;
}