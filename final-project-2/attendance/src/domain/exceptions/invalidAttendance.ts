import { Attendance } from '../attendance';
export class InvalidAttendance extends Error {
  constructor(attendance: Attendance) {
    super("Can't create an empty attendance");
    super.name = 'InvalidAttendance';
    super.stack = JSON.stringify(attendance);
  }
}
