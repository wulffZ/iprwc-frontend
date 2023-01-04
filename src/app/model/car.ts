import {Category} from "./category";

export class Car {
    private _id: number;
    private _title: string;
    private _description: string;
    private _category: Category;
    private _manufacturer: string;
    private _engine_displacement: number;
    private _cylinders: number;
    private _year: number;
    private _km: number;
    private _price: number;
    private _sold: boolean;
    private _thumbnail_uri: string;

    constructor(id: number, title: string, _description: string, _category: Category, manufacturer: string, engine_displacement: number, cylinders: number, year: number, km: number, price: number, sold: boolean, thumbnail_uri: string) {
        this._id = id;
        this._title = title;
        this._description = _description;
        this._category = _category;
        this._manufacturer = manufacturer;
        this._engine_displacement = engine_displacement;
        this._cylinders = cylinders;
        this._year = year;
        this._km = km;
        this._price = price;
        this._sold = sold;
        this._thumbnail_uri = thumbnail_uri;
    }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  get manufacturer(): string {
    return this._manufacturer;
  }

  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  get engine_displacement(): number {
    return this._engine_displacement;
  }

  set engine_displacement(value: number) {
    this._engine_displacement = value;
  }

  get cylinders(): number {
    return this._cylinders;
  }

  set cylinders(value: number) {
    this._cylinders = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get km(): number {
    return this._km;
  }

  set km(value: number) {
    this._km = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get thumbnail_uri(): string {
    return this._thumbnail_uri;
  }

  set thumbnail_uri(value: string) {
    this._thumbnail_uri = value;
  }
}
