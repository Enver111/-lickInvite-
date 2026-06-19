import { Camera, Mail, MessageCircle, Phone, Send, type LucideIcon } from "lucide-react";

type Contact = {
  label: string;
  value: string;
  hint: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export const contacts: Contact[] = [
  {
    label: "Telegram",
    value: "@clickinvite",
    hint: "Быстрые ответы и консультации",
    href: "https://t.me/clickinvite",
    icon: Send,
    external: true,
  },
  {
    label: "Email",
    value: "hello@clickinvite.ru",
    hint: "Для заявок и деловых вопросов",
    href: "mailto:hello@clickinvite.ru",
    icon: Mail,
  },
  {
    label: "Телефон",
    value: "+7 (495) 128-47-90",
    hint: "Звоните в рабочее время",
    href: "tel:+74951284790",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+7 (495) 128-47-90",
    hint: "Удобно обсудить детали проекта",
    href: "https://wa.me/74951284790",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Instagram",
    value: "@clickinvite",
    hint: "Примеры работ и вдохновение",
    href: "https://instagram.com/clickinvite",
    icon: Camera,
    external: true,
  },
] ;

export const workingHours = "Пн–Пт, 10:00–19:00 (МСК)";
export const responseTime = "Ответим в течение часа в рабочее время";
