import {
  PATH_ABOUT,
  PATH_MAZE,
  PATH_PHOTOGRAPHY,
  URL_MY_GAMES,
  URL_MY_GITHUB,
  URL_MY_LINKEDIN,
} from "@/lib/constants";
import InlineLink from "../common/links/InlineLink";
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
          All my games are on{" "}
          <InlineLink href={URL_MY_GAMES}>plett.fun</InlineLink>.
        </p>
      </TabsContent>
      <TabsContent value="recruiter" className="flex flex-col gap-3">
        <p>
          I&apos;m a full-stack web developer who specializes in frontend. Some
          side quests include a 3200 elo{" "}
          <InlineLink href="https://github.com/plettj/hagnusmiemann" external>
            chess engine
          </InlineLink>
          , <InlineLink href={PATH_MAZE}>a 4D maze</InlineLink>, and a few{" "}
          <InlineLink href="https://www.youtube.com/playlist?list=PLTU_pBLoLfLL_X5FpFCAsvjvgqg0-yD5k">
            Guinness World Records
          </InlineLink>
          .
        </p>
        <p>
          More on{" "}
          <InlineLink href={URL_MY_GITHUB} external>
            GitHub
          </InlineLink>{" "}
          or <InlineLink href={URL_MY_LINKEDIN}>LinkedIn</InlineLink>.
        </p>
        <i className="text-muted-foreground">jlplett[at]uwaterloo[dot]ca</i>
      </TabsContent>
    </Tabs>
  );
}
