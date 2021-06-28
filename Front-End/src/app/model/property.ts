import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id!: number | null;
  SellRent!: number | null;
  Name!: string;
  PType!: string | null;
  FType!: string | null;
  Price!: number | null;
  BHK!: number | null;
  BuiltArea!: number | null;
  City!: string;
  RTM!: number | null;

  CarpetArea?: number;
  Address?: string;
  Address2?: string;
  FloorNo?: string;
  TotalFloor?: string;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn?: string;
  PostedBy?: number;
}
