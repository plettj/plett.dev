import {
  PATH_ABOUT,
  PATH_CV,
  PATH_CV_STATIC,
  PATH_WRITING,
  URL_MY_GAMES,
  URL_MY_GITHUB,
} from "@/lib/constants";
import ResponsiveInlineLink from "../ResponsiveInlineLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import InlineLink from "../InlineLink";

export default function HomeTabs() {
  return (
    <Tabs defaultValue="recruiter" className="w-full">
      <TabsList className="flex justify-center gap-4 mb-4 bg-transparent">
        <TabsTrigger value="recruiter">A recruiter</TabsTrigger>
        <TabsTrigger value="gamer">A gamer</TabsTrigger>
        <TabsTrigger value="exploring">Just exploring</TabsTrigger>
      </TabsList>
      <TabsContent value="recruiter">
        <p>
          See my{" "}
          <InlineLink href={URL_MY_GITHUB} external>
            GitHub
          </InlineLink>
          , or read my{" "}
          <ResponsiveInlineLink
            desktopHref={PATH_CV}
            mobileHref={PATH_CV_STATIC}
          >
            CV
          </ResponsiveInlineLink>
          .
        </p>
      </TabsContent>
      <TabsContent value="gamer">
        <p>
          My 18 games are on{" "}
          <InlineLink href={URL_MY_GAMES}>plett.fun</InlineLink>.
        </p>
      </TabsContent>
      <TabsContent value="exploring">
        <p>
          Start with my <InlineLink href={PATH_ABOUT}>about me</InlineLink>{" "}
          page, or maybe my <InlineLink href={PATH_WRITING}>writing</InlineLink>
          .
        </p>
      </TabsContent>
    </Tabs>
  );
}
