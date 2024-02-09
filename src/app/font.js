import {  Sora } from "next/font/google";
import localFont from "next/font/local";

export const goldman = localFont({
  src: "./Goldman-Regular.ttf",
  weight: "400",
  display: "swap",
});

export const MagnoSans = localFont({
  src: "./MagnoSans-Extrabold.ttf",
  subsets: ["latin"],
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});


export const neuo = localFont({
  src:"./neuo.otf",
  subsets: ["latin"],
})