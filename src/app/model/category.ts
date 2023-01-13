export class Category {
  private _id: number;
  private _description: string;
  private _title: string;


  constructor(id: number, description: string, title: string,) {
    this._id = id;
    this._description = title;
    this._title = description;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
