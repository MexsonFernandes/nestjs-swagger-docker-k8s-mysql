import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const url = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const options = new DocumentBuilder()
    .setTitle('API HUB')
    .setDescription('An API panel')
    .setVersion('2020.0.0')
    .addTag('Endpoints')
    .setContact('', '', 'robomex2020@gmail.com')
    .addBearerAuth()
    .addServer(`${url}://`)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
