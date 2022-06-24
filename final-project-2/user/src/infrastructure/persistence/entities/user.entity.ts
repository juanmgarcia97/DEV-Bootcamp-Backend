import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nickname!: string;

  @Column()
  fullName!: string;

  @Column()
  age!: number;
}
