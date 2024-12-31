import { DevTools, Tolgee } from "@tolgee/react";

export function TolgeeBase() {
  return Tolgee().use(DevTools());
}
