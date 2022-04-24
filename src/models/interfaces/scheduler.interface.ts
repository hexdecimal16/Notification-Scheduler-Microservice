import { Notification } from "../types/notification.type";
import { ScheduledTask } from "node-cron";
export interface Scheduler {
  task: ScheduledTask;
  start(notifications: Notification[]): Promise<void>;
  stop(): void;
}
