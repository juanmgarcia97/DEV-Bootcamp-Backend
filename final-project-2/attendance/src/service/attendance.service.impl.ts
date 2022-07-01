import { inject, injectable } from 'inversify';
import { Attendance } from '../domain/attendance';
import { AttendanceRepository } from '../repository/attendance.repository';
import { AttendanceService } from './attendance.service';

@injectable()
export class AttendanceServiceImpl implements AttendanceService {
  @inject('AttendanceRepository') attendanceRepository!: AttendanceRepository;

  async createAttendance(attendance: Attendance): Promise<Attendance> {
    return this.attendanceRepository.createAttendance(attendance);
  }

  async findAllByUser(userId: string): Promise<Attendance[]> {
    return this.attendanceRepository.findAllByUser(userId);
  }

  async findAttendanceById(id: string): Promise<Attendance> {
    return this.attendanceRepository.findAttendanceById(id);
  }

  async updateAttendance(
    id: string,
    attendance: Attendance
  ): Promise<Attendance> {
    return this.attendanceRepository.updateAttendance(id, attendance);
  }

  async deleteAttendance(id: string): Promise<void> {
    await this.attendanceRepository.deleteAttendance(id);
  }
}
