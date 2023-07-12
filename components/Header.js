import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 py-8">
          {/* login */}
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={230} height={55} priority={true} />
          </Link>
          {/* social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
