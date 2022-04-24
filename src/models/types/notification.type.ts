import { Medium } from "../enums/medium.enum";

export type Notification = {
  id: string;
  userId: string;
  title: string;
  message: string;
  phone: number;
  medium: Medium;
  createdAt: Date;
  isSent: boolean;
};
