import { injectable } from 'inversify';
import { MongoRepository } from 'typeorm';
import { Attendance } from '../domain/attendance';
import { AttendanceNotFound } from '../domain/exceptions/attendanceNotFound';
import EmptyProperty from '../domain/exceptions/emptyProperty';
import { InvalidAttendance } from '../domain/exceptions/invalidAttendance';
import { AttendanceRepository } from '../repository/attendance.repository';
import { AppDataSource } from './persistence/db.config';
import { AttendanceEntity } from './persistence/entities/attendance.entity';
import { AttendanceMapper } from './persistence/mappers/attendance.mapper';

@injectable()
export class AttendanceRepositoryImpl implements AttendanceRepository {
  private attendanceRepositoryORM: MongoRepository<AttendanceEntity>;

  constructor() {
    this.attendanceRepositoryORM =
      AppDataSource.getMongoRepository(AttendanceEntity);
  }
  async createAttendance(attendance: Attendance): Promise<Attendance> {
    if (!attendance) throw new InvalidAttendance();
    const attendanceEntity = await this.attendanceRepositoryORM.save(
      AttendanceMapper.toEntity(attendance)
    );
    return AttendanceMapper.toDomain(attendanceEntity);
  }

  async findAllByUser(userId: string): Promise<Attendance[]> {
    if (!userId) throw new EmptyProperty(userId);
    const foundAttendance = await this.attendanceRepositoryORM.find({
      where: { userid: userId },
    });
    if (!foundAttendance) throw new AttendanceNotFound();
    return AttendanceMapper.toDomainList(foundAttendance);
  }

  async findAttendanceById(id: string): Promise<Attendance> {
    if (!id) throw new EmptyProperty(id);
    const foundAttendance = await this.attendanceRepositoryORM.findOne({
      where: { id },
    });
    if (!foundAttendance) throw new AttendanceNotFound();
    return AttendanceMapper.toDomain(foundAttendance);
  }

  async updateAttendance(
    id: string,
    attendance: Attendance
  ): Promise<Attendance> {
    await this.findAttendanceById(id);
    if (!attendance) throw new InvalidAttendance();
    attendance.id = id;
    await this.attendanceRepositoryORM.update(
      id,
      AttendanceMapper.toEntity(attendance)
    );
    return attendance;
  }

  async deleteAttendance(id: string): Promise<void> {
    const attendance = await this.findAttendanceById(id);
    await this.attendanceRepositoryORM.remove(
      AttendanceMapper.toEntity(attendance)
    );
  }
}
