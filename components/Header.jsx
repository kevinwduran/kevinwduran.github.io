import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Socials from "./Socials";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-0 flex justify-center z-50">
      <div className="fixed  container mx-auto flex justify-between items-center xl:max-w-[18%] xl:flex-col xl:justify-start xl:items-start xl:min-h-screen xl:ml-10 xl:gap-12 xl:border-r xl:border-primary/10">
        {/* logo */}
        <Link href="/">
          <Image className="xl:mt-12" src="/assets/Vector.svg" width="60" height="25" />
        </Link>

        {/* desktop nav (>1200px) & curriculo */}
        <div className="hidden xl:flex flex-col items-start gap-8">
          <Nav />
          <div className="flex justify-start text-left">
          <Socials
                  containerSyles="flex gap-6 pt-32"
                  iconStyles="w-9 h-9 border border-accent rounded-md flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-300"
                />
          </div>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
