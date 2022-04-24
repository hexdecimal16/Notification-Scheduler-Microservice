import { NotificationRepository } from "./repository/notification.repository";
import { NotificationScheduler } from "./scheduler/notification.scheduler";
import { runExpress } from "./utils/run-express";
import { generateNotifications } from "./utils/utils";
export const bootstrap = async () => {
  console.log("bootstrap");
  const notifications = generateNotifications(3);
  NotificationRepository.updateNotifications(notifications);
  const notificationScheduler = new NotificationScheduler();
  await notificationScheduler.start();
  runExpress();
};
bootstrap();
