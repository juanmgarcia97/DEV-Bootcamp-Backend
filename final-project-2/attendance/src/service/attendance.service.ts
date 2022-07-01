import { Attendance } from '../domain/attendance';

export interface AttendanceService {
  createAttendance(attendance: Attendance): Promise<Attendance>;
  findAllByUser(userId: string): Promise<Attendance[]>;
  findAttendanceById(id: string): Promise<Attendance>;
  updateAttendance(id: string, attendance: Attendance): Promise<Attendance>;
  deleteAttendance(id: string): Promise<void>;
}
