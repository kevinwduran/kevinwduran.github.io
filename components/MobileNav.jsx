"use client";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Socials from "./Socials";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projetos",
    path: "/projetos",
  },
  {
    name: "sobre",
    path: "/sobre",
  },
  {
    name: "contato",
    path: "/contato",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-1 mb-20 text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold border-b pb-4">
              Kevin<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col items-start gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : "border-b-2 border-transparent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* connect */}
        <div className="pt-32">
          <p className="uppercase font-semibold tracking-widest text-accent">
            Vamos se conectar!
          </p>
          <div>
            <Socials
              containerSyles="flex gap-6 mt-2"
              iconStyles="w-9 h-9 border border-accent rounded-md flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-300"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
