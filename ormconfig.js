module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['dist/modules/**/*.entity.js'],
  migrationsRun: false,
  synchronize: false,
  acquireTimeout: 20000,
  logging: true,
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations_typeorm',
  cli: {
    entitiesDir: 'src/modules',
    migrationsDir: 'src/migrations',
  },
};
