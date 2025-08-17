import type { ReactElement } from "react";
import type { TASK_STATUSES, TASK_TYPES } from "./consts";

export type NavItem = {
  text: string;
  path: string;
};

export type Paths = {
  HOME: string;
  MAIN_SLIDE: string;
  TASKS: string;
  RESULTS: string;
  SENT_TASKS: string;
  STATISTICS: string;
};

export type TaskType = (typeof TASK_TYPES)[keyof typeof TASK_TYPES];

export type TaskStatus = (typeof TASK_STATUSES)[keyof typeof TASK_STATUSES];

export type SidebarSlide = {
  id: string;
  order: string;
  taskType: TaskType;
  taskName: string;
  taskStatus: TaskStatus;
  taskIcon: ReactElement;
};
