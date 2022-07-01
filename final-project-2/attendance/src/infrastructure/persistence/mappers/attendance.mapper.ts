import { Attendance } from '../../../domain/attendance';
import { AttendanceEntity } from '../entities/attendance.entity';

export class AttendanceMapper {
  static toDomain(entity: AttendanceEntity): Attendance {
    return new Attendance(
      entity.id,
      entity.userid,
      entity.startTime,
      entity.endTime,
      entity.date,
      entity.notes
    );
  }

  static toEntity(domain: Attendance): AttendanceEntity {
    const entity = new AttendanceEntity();
    entity.id = domain.id;
    entity.userid = domain.userid;
    entity.startTime = domain.startTime;
    entity.endTime = domain.endTime;
    entity.notes = domain.notes;
    return entity;
  }

  static toDomainList(entities: AttendanceEntity[]): Attendance[] {
    return entities.map((entity) => {
      return new Attendance(
        entity.id,
        entity.userid,
        entity.startTime,
        entity.endTime,
        entity.date,
        entity.notes
      );
    });
  }
}
