import { Goldman, Michroma , Dela_Gothic_One, Sora} from "next/font/google";

export const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
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
})

export const sora = Sora({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600"],
  });