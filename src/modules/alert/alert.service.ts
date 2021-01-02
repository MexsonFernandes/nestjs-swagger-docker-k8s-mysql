import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlertEntity } from './entities/alert.entity';

@Injectable()
export class AlertService extends TypeOrmCrudService<AlertEntity> {
  constructor(@InjectRepository(AlertEntity) repo) {
    super(repo);
  }
}
