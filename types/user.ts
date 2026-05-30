import { ObjectId } from "mongodb";

export interface User {
  id: number;
  name: string;
  email: string;
  _id?: ObjectId;
  createdAt: Date;
}
