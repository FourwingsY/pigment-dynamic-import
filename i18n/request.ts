import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en";
  // do this to make next-intl not emitting any warnings
  return {
    messages: { locale },
  };
});
