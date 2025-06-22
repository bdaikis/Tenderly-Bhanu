import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "Intelligent Opportunity Discovery",
      description:
        "AI scans thousands of tender databases and alerts you to relevant opportunities matching your business profile.",
      icon: "/-14eb5c30-117f-46c4-afad-7b0398d02aae--1.png",
      position: "top-left",
    },
    {
      id: 2,
      title: "Automated Document Analysis",
      description:
        "Advanced NLP processes tender documents to extract key requirements, deadlines, and evaluation criteria.",
      icon: "/-34173702-f0fb-4119-9b15-40abd0bdc19e--1.png",
      position: "top-right",
    },
    {
      id: 3,
      title: "Smart Proposal Generation",
      description:
        "Generate compelling, tailored proposals using AI-powered writing assistance and best practice templates.",
      icon: "/-89a78d1f-ffba-45aa-8941-bea3972e5fa8--1.png",
      position: "middle-center",
    },
    {
      id: 4,
      title: "Competitive Intelligence",
      description:
        "Analyze competitor strategies and market trends to optimize your bidding approach.",
      icon: "/-98d06c16-4d0f-4d2b-baf7-9f1716830f08--1.png",
      position: "bottom-left",
    },
    {
      id: 5,
      title: "Win Probability Scoring",
      description:
        "AI calculates your chances of success for each tender based on historical data and match quality.",
      icon: "/-6d3f4e68-b089-4052-88d9-64f636b4437c--1.png",
      position: "bottom-right",
    },
  ];

  return (
    <section className="w-full max-w-[1356px] mx-auto py-16">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center mb-16 max-w-[929px] mx-auto">
        <h2 className="font-black text-[40px] text-center mb-8 [font-family:'Outfit',Helvetica]">
          Powerful AI Features for Every Stage
        </h2>
        <p className="font-extralight text-3xl text-center [font-family:'Outfit',Helvetica]">
          From discovery to submission, our AI platform handles every aspect of
          the tendering process with precision and intelligence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Feature 1 - Top Left */}
        <Card className="rounded-[20px] bg-[#f4f5f7] bg-opacity-50 col-span-1">
          <CardContent className="p-10 flex flex-col items-center">
            {features[0].icon && (
              <img
                className="w-[45px] h-10 mb-4 object-cover"
                alt="Feature icon"
                src={features[0].icon}
              />
            )}
            <h3 className="font-medium text-3xl text-center mb-6 [font-family:'Outfit',Helvetica]">
              {features[0].title}
            </h3>
            <p className="font-extralight text-3xl text-center [font-family:'Outfit',Helvetica]">
              {features[0].description}
            </p>
          </CardContent>
        </Card>

        {/* Feature 2 - Top Right */}
        <Card className="rounded-[20px] bg-gray-50 bg-opacity-50 col-span-1 md:col-start-3">
          <CardContent className="p-10 flex flex-col items-center">
            <img
              className="w-11 h-11 mb-4 object-cover"
              alt="Feature icon"
              src={features[1].icon}
            />
            <h3 className="font-medium text-3xl text-center mb-6 [font-family:'Outfit',Helvetica]">
              {features[1].title}
            </h3>
            <p className="font-extralight text-3xl text-center [font-family:'Outfit',Helvetica]">
              {features[1].description}
            </p>
          </CardContent>
        </Card>

        {/* Feature 3 - Middle Center */}
        <Card className="rounded-[20px] bg-gray-100 bg-opacity-50 col-span-1 md:col-start-2 md:row-start-2">
          <CardContent className="p-10 flex flex-col items-center">
            <img
              className="w-[65px] h-[65px] mb-4 object-cover"
              alt="Feature icon"
              src={features[2].icon}
            />
            <h3 className="font-medium text-3xl text-center mb-6 [font-family:'Outfit',Helvetica]">
              {features[2].title}
            </h3>
            <p className="font-extralight text-3xl text-center [font-family:'Outfit',Helvetica]">
              {features[2].description}
            </p>
          </CardContent>
        </Card>

        {/* Feature 4 - Bottom Left */}
        <Card className="rounded-[20px] bg-[#f4f4f6] bg-opacity-50 col-span-1 md:row-start-3">
          <CardContent className="p-10 flex flex-col items-center">
            <img
              className="w-[53px] h-[53px] mb-4 object-cover"
              alt="Feature icon"
              src={features[3].icon}
            />
            <h3 className="font-medium text-3xl text-center mb-6 [font-family:'Outfit',Helvetica]">
              {features[3].title}
            </h3>
            <p className="font-extralight text-3xl text-center [font-family:'Outfit',Helvetica]">
              {features[3].description}
            </p>
          </CardContent>
        </Card>

        {/* Feature 5 - Bottom Right */}
        <Card className="rounded-[20px] bg-gray-100 bg-opacity-50 col-span-1 md:col-start-3 md:row-start-3">
          <CardContent className="p-10 flex flex-col items-center">
            <img
              className="w-[42px] h-[38px] mb-4 object-cover"
              alt="Feature icon"
              src={features[4].icon}
            />
            <h3 className="font-medium text-3xl text-center mb-6 [font-family:'Outfit',Helvetica]">
              {features[4].title}
            </h3>
            <p className="font-extralight text-3xl text-center [font-family:'Outfit',Helvetica]">
              {features[4].description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
