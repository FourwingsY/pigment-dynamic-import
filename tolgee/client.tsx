"use client";

import { TolgeeProvider, TolgeeStaticData } from "@tolgee/react";
import { useEffect } from "react";

import { useRouter } from "@/lib/useNavigation";
import { TolgeeBase } from "./shared";

const tolgee = TolgeeBase().init();

type Props = {
  staticData: TolgeeStaticData;
  language: string;
  children: React.ReactNode;
};

export const TolgeeNextProvider = ({
  language,
  staticData,
  children,
}: Props) => {
  const router = useRouter();

  useEffect(() => {
    const { unsubscribe } = tolgee.on("permanentChange", () => {
      router.refresh();
    });
    return () => unsubscribe();
  }, [tolgee, router]);

  return (
    <TolgeeProvider
      tolgee={tolgee}
      options={{ useSuspense: false }}
      fallback="Loading"
      ssr={{ language, staticData }}
    >
      {children}
    </TolgeeProvider>
  );
};
