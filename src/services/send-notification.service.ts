import { Medium } from "../models/enums/medium.enum";
import { Notification } from "../models/types/notification.type";

/**
 * @description service to send notifications based on medium
 * @param notification
 * @returns updated notification sent status
 */
export const sendNotification = async (
  notification: Notification
): Promise<Notification> => {
  try {
    if (notification.medium === Medium.EMAIL) {
      await sendEmailNotification(notification);
    } else if (notification.medium === Medium.SLACK) {
      await sendSlackNotification(notification);
    } else if (notification.medium === Medium.SMS) {
      await sendSmsNotification(notification);
    } else if (notification.medium === Medium.WHATSAPP) {
      await sendWhatsAppNotification(notification);
    } else {
      throw new Error("Unknown medium");
    }
    notification.isSent = true;
  } catch (error) {
    notification.isSent = false;
  }
  return notification;
};

const sendEmailNotification = async (
  notification: Notification
): Promise<void> => {
  // TODO: send notification to email
  // random delay
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));
  // random error
  if (Math.random() > 0.5) {
    throw new Error("Error sending notification");
  }
};

const sendSlackNotification = async (
  notification: Notification
): Promise<void> => {
  // TODO: send notification to slack
  // random delay
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));
  // random error
  if (Math.random() > 0.5) {
    throw new Error("Error sending notification");
  }
};

const sendSmsNotification = async (
  notification: Notification
): Promise<void> => {
  // TODO: send notification to sms
  // random delay
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));
  // random error
  if (Math.random() > 0.5) {
    throw new Error("Error sending notification");
  }
};

const sendWhatsAppNotification = async (
  notification: Notification
): Promise<void> => {
  // TODO: send notification to whatsapp
  // random delay
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));
  // random error
  if (Math.random() > 0.5) {
    throw new Error("Error sending notification");
  }
};
