import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { ResultsSection } from "./sections/ResultsSection";

export const FinalDesign = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full max-w-[1440px] relative">
        <HeaderSection />
        <HeroSection />
        <FeaturesSection />
        <ResultsSection />
        <FooterSection />
      </div>
    </div>
  );
};
