import { DataSource } from 'typeorm';
import HelloWorld from '../models/HelloWorld';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'postgres',
    migrations: ['./src/database/migrations/**/*{.ts,.js}'],
    entities: [HelloWorld],
});

export default AppDataSource;
