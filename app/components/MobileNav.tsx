import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import Menu from "../../public/assets/Menu.svg";
const mobileNavItems = ["Features", "Pricing", "Enterprise", "Careers"];
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-[#E3F1FF]">
        <SheetHeader>
          <SheetTitle>
            <h1 className="font-bold text-2xl text-left">Your Website</h1>
          </SheetTitle>
          <SheetDescription>
            <ul className="text-left text-xl font-bold space-y-4">
              {mobileNavItems.map((item, index) => (
                <li className="cursor-pointer" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
