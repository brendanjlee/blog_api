import { Types } from "mongoose";

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Post {
  title: string;
  content: string;
  author: Types.ObjectId;
  postedDate: Date;
  isPublic: boolean;
}

export interface Comment {
  content: string;
  parentPost: Types.ObjectId;
  author: Types.ObjectId;
  postedDate: Date;
}
