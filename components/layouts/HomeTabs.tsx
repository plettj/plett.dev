import {
  PATH_ABOUT,
  PATH_CV,
  PATH_CV_STATIC,
  PATH_WRITING,
  URL_MY_GITHUB,
  URL_MY_LINKEDIN,
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
          <ResponsiveInlineLink
            desktopHref={PATH_CV}
            mobileHref={PATH_CV_STATIC}
          >
            CV
          </ResponsiveInlineLink>
          ,{" "}
          <InlineLink href={URL_MY_LINKEDIN} external>
            LinkedIn
          </InlineLink>
          , or{" "}
          <InlineLink href={URL_MY_GITHUB} external>
            GitHub
          </InlineLink>
          .
        </p>
      </TabsContent>
      <TabsContent value="gamer">
        <p>
          Find my games on{" "}
          <InlineLink href="https://plett.fun/" external>
            plett.fun
          </InlineLink>
          .
        </p>
      </TabsContent>
      <TabsContent value="exploring">
        <p>
          Start with my <InlineLink href={PATH_ABOUT}>about me</InlineLink> page
          or check out <InlineLink href={PATH_WRITING}>my writing</InlineLink>.
        </p>
      </TabsContent>
    </Tabs>
  );
}
