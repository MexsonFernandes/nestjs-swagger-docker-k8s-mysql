import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';

@Injectable()
export class ProfileService extends TypeOrmCrudService<ProfileEntity> {
  constructor(@InjectRepository(ProfileEntity) repo) {
    super(repo);
  }
}
