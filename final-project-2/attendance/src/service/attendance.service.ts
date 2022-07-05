import { Attendance } from '../domain/attendance';

export interface AttendanceService {
  createAttendance(attendance: Attendance): Promise<Attendance>;
  findAllByUser(userId: string): Promise<Attendance[]>;
  findAttendanceById(id: string): Promise<Attendance>;
  deleteAttendancesForUser(id: string): Promise<void>;
}
