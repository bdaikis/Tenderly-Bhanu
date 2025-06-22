import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ResultsSection = (): JSX.Element => {
  // Data for result cards
  const resultCards = [
    {
      metric: "75%",
      title: "Time Saved",
      description: "Reduce tender preparation time with automated processes",
    },
    {
      metric: "3X",
      title: "More opportunities",
      description: "Discover tender opportunities you would have missed",
    },
    {
      metric: "45%",
      title: "Higher Win Rate",
      description: "Improve success rate with AI-optimized proposals",
    },
    {
      metric: "90%",
      title: "Compliance Rate",
      description: "Eliminate rejection due to non-compliance issues",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-black text-center mb-6 max-w-3xl">
            Measurable Results That Matter
          </h2>
          <p className="text-3xl font-extralight text-center max-w-3xl">
            Join thousands of businesses already winning more with AI-powered
            tendering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultCards.map((card, index) => (
            <Card key={index} className="rounded-[30px] bg-white border-none">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="text-[70px] font-extrabold text-[#4c59e6] text-center mt-6 mb-2">
                  {card.metric}
                </div>
                <h3 className="text-[25px] font-black text-black text-center mb-8">
                  {card.title}
                </h3>
                <p className="text-[25px] font-medium text-black text-center">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
