import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = "admin",
  VENDEDOR = "vendedor",
  CUSTOMER = "cliente"
}

export interface User extends BaseModel{
  username: string;
  role: ROLES;
}
