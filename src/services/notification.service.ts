import { NotificationRepository } from "../repository/notification.repository";
import { Notification } from "../models/types/notification.type";
import { sendNotification } from "./send-notification.service";

/**
 * @description service to send and handle failed notifications
 */
export async function notificationService(): Promise<Notification[]> {
  const notifications: Notification[] =
    NotificationRepository.getNotifications();
  for (let notification of notifications) {
    notification = await sendNotification(notification);
  }
  // filter out not sent notifications
  const retryNotifications = notifications.filter(
    (notification) => notification.isSent === false
  );
  NotificationRepository.updateNotifications(retryNotifications);
  return retryNotifications;
}
