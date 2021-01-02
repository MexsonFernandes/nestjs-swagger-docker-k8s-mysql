import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('alert')
export class AlertEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ default: false })
  enable_alerts: boolean;

  @Column({ default: false })
  high_fever: boolean;

  @Column({ default: false })
  no_mask: boolean;

  @Column({ default: false })
  get_notifications: boolean;

  @Column({ default: false })
  get_messages: boolean;

  @Column({ default: false })
  get_email: boolean;

  @Column()
  company_code: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
