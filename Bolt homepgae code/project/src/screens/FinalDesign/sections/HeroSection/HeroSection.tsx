import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-32 bg-[#cfffe4]/50">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-bold text-[70px] text-black [font-family:'Outfit',Helvetica] max-w-[746px] mb-6">
          Streamline the Tender Process with AI
        </h1>

        <p className="font-medium text-[40px] text-black [font-family:'Outfit',Helvetica] max-w-[954px] mb-16">
          A bidder-first tender platform leveraging AI to simplify and expedite
          the tendering journey
        </p>

        <Button className="bg-[#004aab] text-white font-medium text-3xl [font-family:'Outfit',Helvetica] rounded-[30px] px-10 py-6 h-auto">
          Available Tenders
        </Button>
      </div>
    </section>
  );
};
