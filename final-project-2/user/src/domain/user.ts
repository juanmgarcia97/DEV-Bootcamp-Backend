export default class User {
  constructor(
    private userId: string,
    private userNickname: string,
    private userFullName: string,
    private userAge: number,
    private userAttendance?: number
  ) {}

  get id(): string {
    return this.userId;
  }

  set id(value: string) {
    this.userId = value;
  }

  get nickname(): string {
    return this.userNickname;
  }
  set nickname(value: string) {
    this.userNickname = value;
  }

  get fullName(): string {
    return this.userFullName;
  }

  set fullName(value: string) {
    this.userFullName = value;
  }

  get age(): number {
    return this.userAge;
  }

  set age(value: number) {
    this.userAge = value;
  }

  get attendance(): number {
    return this.userAttendance ?? 0;
  }

  set attendance(value: number) {
    this.userAttendance = value;
  }
}
