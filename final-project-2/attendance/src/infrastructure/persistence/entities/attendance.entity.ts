import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class AttendanceEntity {
  @ObjectIdColumn({ nullable: false })
  id!: string;

  @Column({ nullable: false })
  userid!: string;

  @Column({ nullable: false })
  startTime!: string;

  @Column({ nullable: false })
  endTime!: string;

  @Column({ nullable: false })
  date!: Date;

  @Column({ nullable: false })
  notes!: string;
}
