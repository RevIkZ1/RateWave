import { registerAs } from '@nestjs/config';

export default registerAs('typeorm', () => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'posgres',
  password: 'petar123',
  database: 'RWABaza',
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
}));
