import React from "react";

// Define the footer data structure for better maintainability
const footerData = {
  columns: [
    {
      title: "Tenderly",
      description:
        "Revolutionizing the tendering process with artificial intelligence.",
      links: [],
    },
    {
      title: "Product",
      links: [{ text: "Pricing", href: "#" }],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Contact", href: "#" },
        { text: "Help center", href: "#" },
      ],
    },
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#131726] py-16">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerData.columns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="font-['Outfit',Helvetica] font-bold text-white text-4xl mb-6">
                {column.title}
              </h2>

              {column.description && (
                <p className="font-['Outfit',Helvetica] font-semibold text-white text-xl max-w-[391px]">
                  {column.description}
                </p>
              )}

              <div className="flex flex-col space-y-4 mt-2">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="font-['Outfit',Helvetica] font-semibold text-white text-xl hover:underline"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
