import ms from "./config/locales/ms.json";
import en from "./config/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ms,
  },
}));
