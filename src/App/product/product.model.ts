import { BaseModel } from "../base.model";
import { Category } from "./categories/category.model";

export type Sizes = "S" | "M" | "L" | "XL";

export interface Product extends BaseModel{
  title:string;
  imagen: string;
  decription: string;
  color: string;
  price: number;
  isNew: boolean;
  tags:[] | string;
  stock: number;
  size?: Sizes;
  category:Category
}


