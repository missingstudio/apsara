import type { Metadata } from "next";
import { metaConfig } from "./meta";

const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${metaConfig.applicationName}`,
    default: metaConfig.applicationName,
  },
  description: metaConfig.description,
  applicationName: metaConfig.applicationName,
  keywords: ["apsara", "ui", "re-usable components"],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  creator: metaConfig.creator,
  twitter: metaConfig.twitter,
  openGraph: metaConfig.openGraph,
  alternates: { canonical: metaConfig.url },
  metadataBase: new URL(metaConfig.url),
};

export default defaultMetadata;
