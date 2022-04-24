import express from "express";
import { Medium } from "../../models/enums/medium.enum";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const mediums = Object.values(Medium);
  res.render("index", {
    title: "Notification Scheduler Microservice",
    mediums,
  });
});

export default router;
