


import { Michroma, Dela_Gothic_One, Sora } from "next/font/google";
import localFont from "next/font/local";

export const goldman = localFont({
  src: "./Goldman-Regular.ttf",
  weight: "400",
  display: "swap",
});

export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const delagothicone = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
