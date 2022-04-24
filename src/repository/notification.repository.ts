import { Notification } from "../models/types/notification.type";

class NotificationRepo {
  private notifications: Notification[];

  constructor(notifications: Notification[] = []) {
    this.notifications = notifications;
  }

  public addNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  public getNotifications(): Notification[] {
    return this.notifications;
  }

  public updateNotifications(notifications: Notification[]): void {
    this.notifications = notifications;
  }
}

export const NotificationRepository = new NotificationRepo();
export const NotificationRepositoryMock = new NotificationRepo();
