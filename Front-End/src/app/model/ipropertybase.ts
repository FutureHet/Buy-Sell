export interface IPropertyBase {
  Id: number | null;
  SellRent: number | null;
  Name: string;
  PType: string | null;
  FType: string | null;
  Price: number | null;
  BHK: number | null;
  BuiltArea: number | null;
  City: string;
  RTM: number | null ;
  Image?: string;
}
