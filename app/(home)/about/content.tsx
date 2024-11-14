import InlineLink from "@/components/InlineLink";
import { ContentListItem } from "@/components/layouts/ContentList";
import Soccer from "@/components/Soccer";
import { PATH_PHOTOGRAPHY, PATH_WRITING } from "@/lib/constants";

const professionalItems: ContentListItem[] = [
  {
    title: "Startups",
    subtitle: "3x founder",
    year: "2024",
    children: (
      <p>
        I&apos;ve founded 3 startups, including a new product at{" "}
        <InlineLink href="https://www.portagelabs.io/" external>
          Portage Labs
        </InlineLink>
        . The other two failed, but I won{" "}
        <InlineLink
          href="https://uwaterloo.ca/computer-science/news/computer-science-startup-sheepit-wins-velocity-5k-pitch"
          external
        >
          these
        </InlineLink>{" "}
        <InlineLink
          href="https://uwaterloo.ca/news/global-health-solution-wins-top-prize-31st-social-impact"
          external
        >
          two
        </InlineLink>{" "}
        competitions and learned a ton; I&apos;ll be back again soon.
      </p>
    ),
  },
  {
    title: "Game dev",
    subtitle: "30+ indie games",
    year: "2013",
    children: (
      <p>
        You can find some of the 30+ games I&apos;ve made since age 10 on{" "}
        <InlineLink href="https://plett.fun/" external>
          plett.fun
        </InlineLink>
        . I&apos;ve won game jams with{" "}
        <InlineLink href="https://plettdev.itch.io/lo-fi-ghost" external>
          these
        </InlineLink>{" "}
        <InlineLink href="https://devpost.com/software/split-second" external>
          two
        </InlineLink>{" "}
        games, sold my indie game{" "}
        <InlineLink href="https://plett.fun/split-second" external>
          Split Second
        </InlineLink>{" "}
        to{" "}
        <InlineLink
          href="https://www.coolmathgames.com/0-split-second"
          external
        >
          Coolmath Games
        </InlineLink>
        , and worked at{" "}
        <InlineLink href="https://www.tacticstudios.com/index.shtml" external>
          Tactic Studios
        </InlineLink>
        .
      </p>
    ),
  },
  {
    title: "Engines",
    subtitle: "Globally 200th chess engine",
    year: "2019",
    children: (
      <p>
        I&apos;ve built a{" "}
        <InlineLink href="https://github.com/plettj/ts-chess-engine" external>
          web-based chess engine
        </InlineLink>
        , an{" "}
        <InlineLink href="https://analysisboard.surge.sh/" external>
          analysis board
        </InlineLink>
        , and a{" "}
        <InlineLink href="https://github.com/plettj/hagnusmiemann" external>
          C++ chess engine
        </InlineLink>{" "}
        ranked in the top 200 engines worldwide. I also designed{" "}
        <InlineLink href="https://github.com/Notoh/UnboxTheGoose" external>
          this
        </InlineLink>{" "}
        Rubik&apos;s cube-solving robot and its custom engine.
        {/* Currently
        building a{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Go_(game)" external>
          Go
        </InlineLink>{" "}
        engine in{" "}
        <InlineLink
          href="https://en.wikipedia.org/wiki/Go_(programming_language)"
          external
        >
          Go
        </InlineLink>
        .*/}
      </p>
    ),
  },
  {
    title: "Data",
    subtitle: "AI Research with Rogers & UW",
    year: "2024",
    children: (
      <p>
        I&apos;m the founding developer at{" "}
        <InlineLink href="https://github.com/5G-Mobile-Healthcare" external>
          this
        </InlineLink>{" "}
        ongoing ECG AI research initiative with{" "}
        <InlineLink href="https://www.rogers.com/5g/5g-labs" external>
          Rogers
        </InlineLink>{" "}
        &{" "}
        <InlineLink href="https://uwaterloo.ca/rogers-5g-partnership/" external>
          UW
        </InlineLink>
        . Some of my machine learning work is on{" "}
        <InlineLink href="https://lichess.ai" external>
          www.lichess.ai
        </InlineLink>{" "}
        (
        <InlineLink href="https://github.com/plettj/lichess.ai" external>
          code
        </InlineLink>
        ), and I made{" "}
        <InlineLink href="https://github.com/plettj/queens" external>
          this
        </InlineLink>{" "}
        LinkedIn{" "}
        <InlineLink href="https://www.linkedin.com/games/queens/" external>
          Queens
        </InlineLink>{" "}
        performance analysis tool.
      </p>
    ),
  },
  {
    title: "Speaking",
    subtitle: "2000+ live audience members",
    year: "2022",
    children: (
      <p>
        I{" "}
        <InlineLink
          href="https://www.youtube.com/live/xQFHZhmiJuA?si=vku75JT75NyMW9Op&t=1200"
          external
        >
          opened
        </InlineLink>{" "}
        the{" "}
        <InlineLink href="https://www.socratica.info/" external>
          Socratica
        </InlineLink>{" "}
        <InlineLink
          href="https://uwaterloo.ca/engineering/events/socratica-symposium"
          external
        >
          W24
        </InlineLink>{" "}
        <InlineLink href="https://www.instagram.com/p/C5WDMB_ged7/" external>
          Symposium
        </InlineLink>{" "}
        and taught{" "}
        <InlineLink href="https://github.com/zrwaite/se101-spaceship" external>
          this
        </InlineLink>{" "}
        University of Waterloo course. I&apos;ve also spoken at UW&apos;s{" "}
        <InlineLink
          href="https://uwaterloo.ca/math-innovation/student-entrepreneurship/entrepreneurship-and-impact-series"
          external
        >
          Math Innovation
        </InlineLink>{" "}
        series, a{" "}
        <InlineLink href="https://uwaterloo.ca/grebel/" external>
          Conrad Grebel
        </InlineLink>{" "}
        event, 8 middle schools, and more.
      </p>
    ),
  },
  {
    title: "Volunteering",
    subtitle: "And fundraising",
    year: "2016",
    children: (
      <p>
        I&apos;ve been a formal note-taker for 11 university classes. I also ran
        my city&apos;s{" "}
        <InlineLink href="https://www.colwoodbadminton.ca/" external>
          badminton club
        </InlineLink>{" "}
        for 3 years, led a team of 36 that{" "}
        <InlineLink
          href="https://archive.uwimprint.ca/article/the-wellness-warriors-push-up-challenge/"
          external
        >
          raised $2,000+
        </InlineLink>{" "}
        for{" "}
        <InlineLink href="https://cmha.ca/" external>
          Mental Health
        </InlineLink>
        , and 1-1 mentored 20+ students through the{" "}
        <InlineLink href="https://csclub.uwaterloo.ca/" external>
          UW CSC
        </InlineLink>
        .
      </p>
    ),
  },
];

const hobbyItems: ContentListItem[] = [
  {
    title: "Writing",
    subtitle: "For Waterloo's largest publication",
    year: "2021",
    children: (
      <p>
        I&apos;m a writer for{" "}
        <InlineLink href="https://mathnews.uwaterloo.ca/" external>
          mathNEWS
        </InlineLink>
        , and sometimes publish on this site,{" "}
        <InlineLink href={PATH_WRITING}>here</InlineLink>.
      </p>
    ),
  },
  {
    title: "Photography",
    subtitle: "Amateur portfolio",
    year: "2018",
    children: (
      <p>
        You can find my amateur photography portfolio{" "}
        <InlineLink href={PATH_PHOTOGRAPHY}>here</InlineLink>.
      </p>
    ),
  },
  {
    title: "Math",
    subtitle: "Provincial champion",
    year: "2009",
    children: (
      <p>
        I was provincial champion in the{" "}
        <InlineLink
          href="https://mathematica.ca/pdf/palmares/2016/students.pdf"
          external
        >
          2016 Euler
        </InlineLink>{" "}
        math contest, and received National Distinction in 6 other math
        competitions. I&apos;ve also held the{" "}
        <InlineLink
          href="https://www.reddit.com/r/math/comments/okgpy4/i_found_a_new_special_irrational_number_1442692/"
          external
        >
          top spot
        </InlineLink>{" "}
        on r/Math for a week.
      </p>
    ),
  },
  {
    title: "Chess",
    subtitle: "National qualifier",
    year: "2019",
    children: (
      <p>
        Six months after learning the rules, I qualifed for Canadian nationals.
        I&apos;m also the{" "}
        <InlineLink href="https://lichess.org/swiss/jqpPbyIp" external>
          2021 Victoria Chess Challenge
        </InlineLink>{" "}
        champion. I play on{" "}
        <InlineLink href="https://lichess.org/@/plettj" external>
          lichess.org
        </InlineLink>{" "}
        and{" "}
        <InlineLink href="https://www.chess.com/member/plettj" external>
          chess.com
        </InlineLink>
        , hovering around 1950 blitz.
      </p>
    ),
  },
  {
    title: "Speedcubing",
    subtitle: "3 world records",
    year: "2009",
    children: (
      <p>
        I&apos;ve solved a Rubik&apos;s cube in 7.46 seconds, and currently hold
        3 official{" "}
        <InlineLink
          href="https://www.youtube.com/playlist?list=PLTU_pBLoLfLL_X5FpFCAsvjvgqg0-yD5k"
          external
        >
          Guinness World Records
        </InlineLink>
        . They garnered{" "}
        <InlineLink
          href="https://vancouverisland.ctvnews.ca/saanich-student-preparing-to-beat-3-guinness-world-records-1.5297653"
          external
        >
          some
        </InlineLink>{" "}
        <InlineLink
          href="https://cheknews.ca/chek-upside-island-teen-hoping-unique-skill-lands-him-in-guiness-book-of-world-records-740982/"
          external
        >
          publicity
        </InlineLink>
        .
      </p>
    ),
  },
  {
    title: "Origami",
    subtitle: "1500+ hours of folding",
    year: "2012",
    children: (
      <p>
        Starting with{" "}
        <InlineLink
          href="https://www.amazon.de/-/en/Kyong-Lee/dp/1449406912"
          external
        >
          this
        </InlineLink>{" "}
        2012 fold-a-day calendar and soon leading to{" "}
        <InlineLink
          href="https://www.amazon.com/Origami-Masters-Bugs-Wars-Changed/dp/1937994104"
          external
        >
          these
        </InlineLink>{" "}
        <InlineLink href="https://a.co/d/cLkKD5w" external>
          two
        </InlineLink>{" "}
        master-level books, I&apos;ve spent over a decade folding top-level
        models such as{" "}
        <InlineLink href="/images/home/Origami_Titan_Beetle.jpg" external>
          this
        </InlineLink>{" "}
        titan beetle.
      </p>
    ),
  },
  {
    title: "Typing",
    subtitle: "Qwerty and Colemak",
    year: "2021",
    children: (
      <p>
        I main the{" "}
        <InlineLink href="https://colemakmods.github.io/mod-dh/" external>
          Colemak Mod-DH
        </InlineLink>{" "}
        layout, but I&apos;m still above 100wpm on Qwerty.{" "}
        <InlineLink href="https://monkeytype.com/" external>
          Monkeytype
        </InlineLink>{" "}
        is where I train both:{" "}
        <InlineLink
          href="https://monkeytype.com/profile/Colemak_Mod-DH"
          external
        >
          Colemak profile
        </InlineLink>
        ,{" "}
        <InlineLink href="https://monkeytype.com/profile/plettj" external>
          Qwerty profile
        </InlineLink>
        . I also built{" "}
        <InlineLink href="/images/home/Custom_Keyboard.jpg" external>
          this
        </InlineLink>{" "}
        keyboard with{" "}
        <InlineLink
          href="https://cannonkeys.com/products/gateron-pro-north-pole-linear-switch"
          external
        >
          these
        </InlineLink>{" "}
        switches.
      </p>
    ),
  },
  {
    title: "Circus",
    subtitle: "Juggling, etc",
    year: "2020",
    children: (
      <p>
        I can juggle, hold my breath for 6 minutes, throw a card 50m, and solve
        Rubik&apos;s cubes blindfolded.
      </p>
    ),
  },
  {
    title: "Music",
    subtitle: "Piano, choir, trumpet",
    year: "2017",
    children: (
      <p>
        You can find my piano playing on{" "}
        <InlineLink
          href="https://www.youtube.com/playlist?list=PLTU_pBLoLfLLW-w9wt5bGvua7yj9hQlnX"
          external
        >
          Youtube
        </InlineLink>
        . I&apos;ve also sang in UW&apos;s{" "}
        <InlineLink href="https://uwaterloo.ca/music/university-choir" external>
          University Choir
        </InlineLink>
        , and played Trumpet 1 for{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Last_Post" external>
          The Last Post
        </InlineLink>{" "}
        at a Remembrance Day ceremony.
      </p>
    ),
  },
  {
    title: "Sports",
    subtitle: "Climbing, squash, slacklining",
    year: "2017",
    children: (
      <p>
        These days I run, climb, play squash and ultimate, and work out. I used
        to play{" "}
        <InlineLink
          href="https://www.npmjs.com/package/soccer-football"
          external
        >
          <Soccer />
        </InlineLink>
        , badminton, and do triathlons. I own a slackline and love to ski.
      </p>
    ),
  },
];

export { professionalItems, hobbyItems };
