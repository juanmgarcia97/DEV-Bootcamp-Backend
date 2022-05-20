import { DataSource } from 'typeorm';
import GameEntity from './entities/game.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'juanmar1709',
  database: 'chess-api',
  port: 5433,
  synchronize: true,
  logging: true,
  entities: [GameEntity],
  migrations: [],
  subscribers: [],
});
