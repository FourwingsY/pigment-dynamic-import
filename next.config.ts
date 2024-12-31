import { PigmentOptions, withPigment } from "@pigment-css/nextjs-plugin";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {};

const pigmentConfig: PigmentOptions = {};

export default withPigment(withNextIntl(nextConfig), pigmentConfig);
