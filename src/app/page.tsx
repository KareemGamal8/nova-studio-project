import { AboutUs, Courses, Hero, Packages, Stats } from "@/src/modules/home/components";

export default function page() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutUs />
      <Courses />
      <Packages />
    </>
  );
}
