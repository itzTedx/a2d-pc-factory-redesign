import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: [
    {
      path: "./clash-display/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});
