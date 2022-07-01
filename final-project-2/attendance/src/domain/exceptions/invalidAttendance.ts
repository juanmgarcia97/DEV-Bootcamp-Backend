export class InvalidAttendance extends Error {
  constructor() {
    super("Can't create an empty attendance");
    super.name = 'InvalidAttendance';
  }
}
