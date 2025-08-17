import type { NavItem, Paths } from "./types";

export const PATHS: Paths = {
  MAIN_SLIDE: "/main-slide",
  TASKS: "/tasks",
  RESULTS: "/results",
  SENT_TASKS: "/sent-tasks",
  STATISTICS: "/statistics",
  HOME: "/",
} as const;

export const NAV_ITEMS: NavItem[] = [
  {
    text: "Главная слайда",
    path: "/main-slide",
  },
  {
    text: "Задачи урока",
    path: "/tasks",
  },
  {
    text: "Результаты",
    path: "/results",
  },
  {
    text: "Посылки",
    path: "/sent-tasks",
  },

  {
    text: "Статистика",
    path: "/statistics",
  },
];

export const LANGUAGES = ["C++", "Python", "Java"];

export const TASK_STATUSES = {
  accepted: "Принято",
  retry: "Перерешать",
  notFullfilled: "Не выполнено",
} as const;

export const TASK_TYPES = {
  task: "Задача",
  taskHomework: "Задача / ДЗ",
  theory: "Теория",
  test: "Тест",
  video: "Видео",
  presentation: "Презентация",
} as const;
