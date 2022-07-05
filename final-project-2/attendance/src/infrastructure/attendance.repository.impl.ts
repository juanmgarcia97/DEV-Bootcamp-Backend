import { injectable } from 'inversify';
import { In, MongoRepository, ObjectID } from 'typeorm';
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
    // if (!attendance) throw new InvalidAttendance();
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
      where: { _id: id },
    });
    if (!foundAttendance) throw new AttendanceNotFound();
    return AttendanceMapper.toDomain(foundAttendance);
  }

  async deleteAttendancesForUser(id: string): Promise<void> {
    const attendances = await this.findAllByUser(id);
    await this.attendanceRepositoryORM.remove(AttendanceMapper.toEntityList(attendances));
  }
}
