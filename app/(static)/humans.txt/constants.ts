import { URL_MY_GITHUB } from "@/lib/constants";
import { formatDateAbbr } from "@/lib/utils";

interface HumansTxtContent {
  TEAM?: Array<{ [key: string]: string }>;
  SITE?: { [key: string]: string };
  THANKS?: Array<{ [key: string]: string }>;
  FUN?: string;
}

const myHumansTxt: HumansTxtContent = {
  TEAM: [
    {
      Developer: "Josiah Plett",
      Github: URL_MY_GITHUB,
      From: "Victoria, British Columbia, Canada",
      Currently_In: "Copenhagen, Denmark",
    },
  ],
  SITE: {
    Last_Update: ((): string => formatDateAbbr(new Date()))(),
    Software: "Next.js, Vercel, Tailwind, shadcn/ui, Upstash",
  },
  THANKS: [
    {
      Name: "River Stanley",
      Website: "https://www.linkedin.com/in/river-stanley/",
    },
    {
      Name: "Justin Zwart",
      LinkedIn: "https://www.linkedin.com/in/justin-zwart-08916322b/",
    },
  ],
  FUN: `           xmc7777777pw
           vaSGGGGDDJet
           zyxwwwqYKJet
                zt1KJet
                zt1KJet
                zt1KJet
                zt1KJet
                zt1KJet
                zt1KJet
    yqjhpw      zt1KJet
    wcVM7n      zsVIKhv
    yp1DI7ty   n8IITpz
    zzk4NGFPTSMHFN8rx
      zxmc754458cpw
          zzyyyyz
  `,
};

export { myHumansTxt, type HumansTxtContent };
