import AdminBro from 'admin-bro';
import * as AdminBroExpress from '@admin-bro/express';
import * as dotenv from 'dotenv';
import { ProfileEntity } from './modules/profile/entities/profile.entity';
import { Database, Resource } from '@admin-bro/typeorm';
import { validate } from 'class-validator';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

dotenv.config();

Resource.validate = validate;
AdminBro.registerAdapter({ Database, Resource });

(async () => {
  const connection = await createConnection({
    name: 'admin',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [ProfileEntity],
    migrationsRun: false,
    synchronize: false,
    acquireTimeout: 20000,
    logging: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      // Location of migration should be inside src folder
      // to be compiled into dist/ folder.
      migrationsDir: 'src/migrations',
    },
  });

  // Applying connection to model
  ProfileEntity.useConnection(connection);

  // AdminBro router
  const adminBro = new AdminBro({
    rootPath: '/',
    resources: [{ resource: ProfileEntity }],
    branding: {
      companyName: 'SIAS',
      softwareBrothers: false,
      logo: 'https://sias.preflet.com/_nuxt/img/sias.8b5a134.png',
    },
  });

  // Nest.js App
  const app = await NestFactory.create(AppModule);

  // Nest.js AdminBro
  const router = AdminBroExpress.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);

  // App
  await app.listen(3030);
  console.log('Nest.js AdminBro is running on 3030');
})();
