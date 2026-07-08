import { BackendProjects } from "@/components/sections/backend-projects";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <BackendProjects />
      <Education />
      <Contact />
    </>
  );
}
