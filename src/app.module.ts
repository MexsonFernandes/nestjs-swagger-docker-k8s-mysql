import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RateLimiterModule } from 'nestjs-fastify-rate-limiter';
import { ProfileModule } from './modules/profile/profile.module';
import { AlertModule } from './modules/alert/alert.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    RateLimiterModule.register({
      points: 1000, // request allowed in 5 minutes
      duration: 5 * 60 * 1000, // 5 minutes
      errorMessage:
        'Too many requests created from this IP, please try again after 5 minutes',
      keyPrefix: 'global',
    }),
    AlertModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
