import { TOTAL_COURSE_NOTES } from "@/app/(home)/notes/content";
import {
  PATH_ABOUT,
  PATH_CV,
  PATH_CV_STATIC,
  PATH_MAZE,
  PATH_NOTES,
  PATH_PHOTOGRAPHY,
  URL_MY_GAMES,
  URL_MY_GITHUB,
  URL_MY_LINKEDIN,
} from "@/lib/constants";
import InlineLink from "../common/links/InlineLink";
import ResponsiveInlineLink from "../common/links/ResponsiveInlineLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function HomeTabs() {
  return (
    <Tabs
      defaultValue="exploring"
      className="w-full"
      aria-label="Visitor type"
      searchParam="visitor"
    >
      <TabsList className="flex h-fit flex-col xs:flex-row gap-4 mb-4 bg-transparent">
        <TabsTrigger value="exploring">Just exploring</TabsTrigger>
        <TabsTrigger value="gamer">A gamer</TabsTrigger>
        <TabsTrigger value="recruiter">A recruiter</TabsTrigger>
      </TabsList>
      <TabsContent value="exploring">
        <p>
          Start with my <InlineLink href={PATH_ABOUT}>About</InlineLink> page,
          or maybe my{" "}
          <InlineLink href={PATH_PHOTOGRAPHY}>Photography</InlineLink>.
        </p>
      </TabsContent>
      <TabsContent value="gamer">
        <p>
          My 18 games are on{" "}
          <InlineLink href={URL_MY_GAMES}>plett.fun</InlineLink>.
        </p>
      </TabsContent>
      <TabsContent value="recruiter" className="flex flex-col gap-3">
        <p>
          I&apos;ve worked 7 software roles, founded 3 companies, released{" "}
          <InlineLink href={URL_MY_GAMES}>18 games</InlineLink> totalling
          200,000+ players, broken{" "}
          <InlineLink href="https://www.youtube.com/playlist?list=PLTU_pBLoLfLL_X5FpFCAsvjvgqg0-yD5k">
            3 Guinness World Records
          </InlineLink>
          , and published notes for{" "}
          <InlineLink href={PATH_NOTES}>
            {TOTAL_COURSE_NOTES} classes
          </InlineLink>
          . Plus some <InlineLink href={PATH_ABOUT}>side quests</InlineLink>{" "}
          like a <InlineLink href={PATH_MAZE}>physical 4D maze</InlineLink> and
          a top-200{" "}
          <InlineLink href="https://github.com/plettj/hagnusmiemann" external>
            chess engine
          </InlineLink>
          .
        </p>
        <p>
          See{" "}
          <InlineLink href={URL_MY_GITHUB} external>
            GitHub
          </InlineLink>
          , <InlineLink href={URL_MY_LINKEDIN}>LinkedIn</InlineLink>, or my{" "}
          <ResponsiveInlineLink
            desktopHref={PATH_CV}
            mobileHref={PATH_CV_STATIC}
          >
            CV
          </ResponsiveInlineLink>{" "}
          for more.
        </p>
        <i className="text-muted-foreground">jlplett[at]uwaterloo[dot]ca</i>
      </TabsContent>
    </Tabs>
  );
}
