export default class User {
  constructor(
    private _id: number,
    private _nickname: string,
    private _fullName: string,
    private _age: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get nickname(): string {
    return this._nickname;
  }
  public set nickname(value: string) {
    this._nickname = value;
  }

  public get fullName(): string {
    return this._fullName;
  }

  public set fullName(value: string) {
    this._fullName = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }
}
