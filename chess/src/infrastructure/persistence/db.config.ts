import { DataSource } from 'typeorm';
import GameEntity from './entities/game.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: true,
  entities: [GameEntity],
  migrations: [],
  subscribers: [],
});
