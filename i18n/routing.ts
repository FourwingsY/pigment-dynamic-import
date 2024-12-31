import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from "@/tolgee/shared";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ALL_LANGUAGES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LANGUAGE,
});
