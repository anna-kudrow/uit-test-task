import type { NavItem } from "./types";

export const PATHS = {
  MAIN_SLIDE: "/main-slide",
  TASKS: "/tasks",
  RESULTS: "/results",
  PARCELS: "/parcels",
  STATISTICS: "/statistics",
  HOME: "/",
};

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
    path: "/parcels",
  },

  {
    text: "Статистика",
    path: "/statistics",
  },
];

export const LANGUAGES = ["C++", "Python", "Java"];

export const STATUSES = ["Принято", "Ожидает", "Ошибка", "Выполнено"];
