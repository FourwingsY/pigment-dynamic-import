"use client";

import styles from "./page.module.css";
import { useTranslate } from "@tolgee/react";

export default function Home() {
  const { t } = useTranslate();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t("testButton")}</h1>
      </main>
    </div>
  );
}
