import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import AnimatedBackground from "@/components/core/animate-background";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Logo" />

        <div className="flex gap-4">
          <AnimatedBackground
            defaultValue={navLinks[0].name}
            className="rounded-lg bg-zinc-300"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {navLinks.map((tab: any, index: any) => (
              <button
                key={index}
                data-id={tab}
                type="button"
                className="px-2 py-0.5 text-zinc-800 transition-colors duration-300 hover:text-zinc-950"
              >
                {tab.name}
              </button>
            ))}
          </AnimatedBackground>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
