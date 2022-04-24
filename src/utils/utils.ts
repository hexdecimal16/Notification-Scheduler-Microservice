import { Medium } from "../models/enums/medium.enum";
import { Notification } from "../models/types/notification.type";
import { v4 as uuidv4 } from "uuid";

export const generateNotifications = (count: number): Notification[] => {
  // convert medium enum to array
  const mediums = Object.values(Medium);
  const notifications: Notification[] = [];
  for (let i = 0; i < count; i++) {
    notifications.push({
      id: `${i}`,
      userId: uuidv4(),
      title: `Title ${i}`,
      message: `Message ${i}`,
      // Randomly generate 10 digits phone number
      phone:
        Math.floor(Math.random() * (9999999999 - 100000000 + 1)) + 100000000,
      // Random medium between EMAIL, SMS, WHATSAPP, SLACK
      medium: mediums[randomInterval(0, mediums.length - 1)],
      createdAt: new Date(),
      isSent: false,
    });
  }
  return notifications;
};

export const randomInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
