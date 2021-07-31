import { UserRoles } from './../common/enums/user-roles.enum';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true, unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role: UserRoles;

  @Column({ type: 'text' })
  first_name: string;

  @Column({ type: 'text', nullable: true })
  last_name: string;

  @BeforeInsert()
  async hashPassword() {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  }

}