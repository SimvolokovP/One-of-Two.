import { GoHome, GoPerson } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";

export const navLinks = [
  { path: "/", text: "Главная", icon: GoHome },
  { path: "/creator", text: "Создать тест", icon: IoCreateOutline },
  { path: "/profile", text: "Профиль", icon: GoPerson },
];

export const formTabs = [
  { text: "Логин", value: "login" },
  { text: "Пароль", value: "password" },
  { text: "Авторизация", value: "auth" },
];

