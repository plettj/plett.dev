import HomeTabs from "@/components/layouts/HomeTabs";
import ProfilePhoto from "@/components/ProfilePhoto";

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
            I&apos;m currently pursuing a Bachelor of Computer Science at the
            University of Waterloo, and looking for my 6th co-op job for Fall
            2025.
          </p>
        </div>
        <ProfilePhoto
          src={[
            "/images/home/Profile_Light.jpg",
            "/images/home/Profile_Dark.jpg",
          ]}
          size={256}
        />
      </div>

      <p className="mt-2">Are you...</p>
      <HomeTabs />
    </div>
  );
}
