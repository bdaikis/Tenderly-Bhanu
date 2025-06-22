import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Navigation data for mapping
const navigationItems = [
  {
    name: "Tenders",
    icon: "/image-1.png",
    iconAlt: "Tenders icon",
  },
  {
    name: "Profile",
    icon: "/image-2.png",
    iconAlt: "Profile icon",
  },
  {
    name: "Reputation",
    icon: "/-58bc95b6-a6af-4b29-a69c-c6026ec6b619--1.png",
    iconAlt: "Reputation icon",
  },
  {
    name: "Help",
    icon: "/-e3a9fe80-c979-49d6-a85d-fbd0e130ec2a--1.png",
    iconAlt: "Help icon",
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full py-4 bg-transparent flex justify-between items-center">
      <div className="flex items-end">
        <h1 className="text-[100px] font-bold font-['Outfit',Helvetica] text-black tracking-[0] leading-[normal] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000]">
          Tenderly
        </h1>

        <div className="flex items-center ml-3 mb-3">
          <img
            className="w-[43px] h-[45px] object-cover"
            alt={navigationItems[0].iconAlt}
            src={navigationItems[0].icon}
          />
          <span className="font-['Outfit',Helvetica] font-bold text-black text-3xl ml-0">
            {navigationItems[0].name}
          </span>
        </div>
      </div>

      <NavigationMenu className="mr-4">
        <NavigationMenuList className="flex space-x-4">
          {navigationItems.slice(1).map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink className="flex items-center" href="#">
                <img
                  className="w-[37px] h-[37px] object-cover"
                  alt={item.iconAlt}
                  src={item.icon}
                />
                <span className="font-['Outfit',Helvetica] font-bold text-black text-3xl ml-2">
                  {item.name}
                </span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
