import { Notification } from "../models/types/notification.type";
import { generateNotifications } from "../utils/utils";
import { sendNotification } from "./send-notification.service";

test("should send a single notifications", () => {
  const notification: Notification = generateNotifications(1)[0];
  return sendNotification(notification).then((notification) => {
    expect(notification).toMatchObject(notification);
  });
});
