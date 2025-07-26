import { Metadata } from "next";
import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import WebResult from "./components/home/web-result";

export const metadata: Metadata = {
  title: "Hawkrix",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Brand />
      <WebResult />
      <Innovation />
      <OnlinePresence />
      <CreativeMind />
      <CustomerStories />
      <Faq />
      <Achievements />
    </main>
  );
}
