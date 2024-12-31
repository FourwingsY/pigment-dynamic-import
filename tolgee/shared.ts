import { Tolgee, DevTools } from "@tolgee/react";

export const ALL_LANGUAGES = ["en", "ko"];

export const DEFAULT_LANGUAGE = "en";

export async function getStaticData(
  languages: string[],
  namespaces: string[] = [""]
) {
  const result: Record<string, any> = {};

  for (const lang of languages) {
    for (const namespace of namespaces) {
      if (namespace) {
        result[`${lang}:${namespace}`] = (
          await import(`../i18n/messages/${namespace}/${lang}.json`)
        ).default;
      } else {
        result[lang] = (await import(`../i18n/messages/${lang}.json`)).default;
      }
    }
  }

  return result;
}

export function TolgeeBase() {
  return Tolgee().use(DevTools());
}
