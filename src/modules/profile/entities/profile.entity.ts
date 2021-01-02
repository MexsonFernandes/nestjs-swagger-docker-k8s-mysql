import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AccountType {
  BUSINESS = 'Business',
  SCHOOL = 'School',
  PLUG_AND_PLAY = 'Plug n Play',
}

@Entity('profile')
export class ProfileEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 50 })
  username: string;

  @ApiProperty()
  @Column({ length: 155 })
  email: string;

  @Column()
  company_code: number;

  @Column()
  fcm_token: string;

  @Column({ length: 20 })
  mobile_num: string;

  @ApiProperty()
  @Column({ default: false })
  two_factor_auth: boolean;

  @ApiProperty()
  @Column({ default: false })
  privacy_policy: boolean;

  @Column({ type: 'timestamp' })
  privacy_policy_timestamp: Date;

  @Column({
    type: 'enum',
    enum: AccountType,
    default: AccountType.BUSINESS,
  })
  account_type: number; // code for accounts 1 - Business, 2 - School, 3 - Plug n Play

  @Column({ default: 'Asia/Dubai' })
  timezone: AccountType;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
