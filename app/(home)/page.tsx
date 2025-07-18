import ProfilePhoto from "@/components/common/photos/ProfilePhoto";
import HomeTabs from "@/components/layouts/HomeTabs";
import { TabsTriggerSkeleton } from "@/components/ui/tabs";
import { PATH_PFP_DARK, PATH_PFP_LIGHT } from "@/lib/constants";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 sm:gap-8 flex-col sm:flex-row">
        <div className="flex flex-col gap-3 mb-2">
          <p>
            I&apos;m Josiah Plett, a software developer, designer, and
            entrepreneur.
          </p>
          <p>
            I&apos;m wrapping up a Bachelor of Computer Science at the
            University of Waterloo, looking for Fall 2026 full-time roles.
          </p>
        </div>
        <ProfilePhoto src={[PATH_PFP_LIGHT, PATH_PFP_DARK]} size={256} />
      </div>

      <p className="mt-2">Are you...</p>
      <Suspense
        fallback={
          <div className="flex h-fit flex-col xs:flex-row items-center justify-center rounded-md bg-transparent p-1 text-muted-foreground">
            <TabsTriggerSkeleton active>Just exploring</TabsTriggerSkeleton>
            <TabsTriggerSkeleton>A gamer</TabsTriggerSkeleton>
            <TabsTriggerSkeleton>A recruiter</TabsTriggerSkeleton>
          </div>
        }
      >
        <HomeTabs />
      </Suspense>
    </div>
  );
}
