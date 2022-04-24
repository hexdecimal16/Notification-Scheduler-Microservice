import express from "express";
import { Notification } from "../../models/types/notification.type";
import { NotificationRepository } from "../../repository/notification.repository";
import { sendNotification } from "../../services/send-notification.service";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("req", req, "res", res);
  res.render("notification", { sucess: "true" });
});

router.post("/", async function (req, res, next) {
  let notification: Notification = {
    id: req.body.id,
    title: req.body.title,
    message: req.body.message,
    userId: req.body.userId,
    isSent: false,
    medium: req.body.medium,
    phone: req.body.phone,
    createdAt: new Date(),
  };
  notification = await sendNotification(notification);
  if (notification.isSent) {
    res.send("Notification sent successfully");
  } else {
    NotificationRepository.addNotification(notification);
    res.send("Notification not sent. Added to retry queue");
  }
});

export default router;
