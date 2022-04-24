import { Scheduler } from "../models/interfaces/scheduler.interface";
import { schedule, ScheduledTask } from "node-cron";
import { notificationService } from "../services/notification.service";

/**
 * @description schudler for sending notifications will run every minute
 */
export class NotificationScheduler implements Scheduler {
  task: ScheduledTask;
  async start(): Promise<void> {
    // let maxTry = 3;
    this.task = schedule("* * * * *", (date) => {
      console.log("run", date);
      notificationService();
    });
    this.task.start();
  }
  stop(): void {
    this.task.stop();
  }
}
