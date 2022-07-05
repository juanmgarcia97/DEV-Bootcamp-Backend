import { inject, injectable } from 'inversify';
import { Attendance } from '../domain/attendance';
import { AttendanceRepository } from '../repository/attendance.repository';
import { AttendanceService } from './attendance.service';
import { UserService } from './user.service';
import { AxiosError } from 'axios';
import { UserNotFound } from '../domain/exceptions/userNotFound';

@injectable()
export class AttendanceServiceImpl implements AttendanceService {
  @inject('AttendanceRepository') attendanceRepository!: AttendanceRepository;
  @inject('UserService') userService!: UserService;

  async createAttendance(attendance: Attendance): Promise<Attendance> {
    try {
      await this.userService.findUserById(attendance.userid);
    } catch (error) {
      if (error instanceof AxiosError) throw new UserNotFound;
    }
    return this.attendanceRepository.createAttendance(attendance);
  }

  async findAllByUser(userId: string): Promise<Attendance[]> {
    return this.attendanceRepository.findAllByUser(userId);
  }

  async findAttendanceById(id: string): Promise<Attendance> {
    return this.attendanceRepository.findAttendanceById(id);
  }

  async deleteAttendancesForUser(id: string): Promise<void> {
    await this.attendanceRepository.deleteAttendancesForUser(id);
  }
}
