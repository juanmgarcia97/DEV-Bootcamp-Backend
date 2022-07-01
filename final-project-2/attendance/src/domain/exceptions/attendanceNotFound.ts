export class AttendanceNotFound extends Error {
  constructor() {
    super('Attendance not found');
    super.name = 'AttendanceNotFound';
  }
}
