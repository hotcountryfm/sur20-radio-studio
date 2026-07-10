import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import NowPlaying from "../components/NowPlaying";
import FeaturedPrograms from "../components/FeaturedPrograms";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeIn>
        <Features />
      </FadeIn>

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn>
        <NowPlaying />
      </FadeIn>

      <FadeIn>
        <FeaturedPrograms />
      </FadeIn>
    </>
  );
}