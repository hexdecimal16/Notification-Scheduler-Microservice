import { NotificationRepositoryMock } from "../repository/notification.repository";
import { generateNotifications } from "../utils/utils";
import { notificationService } from "./notification.service";

test("should send and hancle notifications", () => {
  const notifications = generateNotifications(2);
  NotificationRepositoryMock.updateNotifications(notifications);
  return notificationService().then((notifications) => {
    expect(notifications).toMatchObject(notifications);
  });
});
