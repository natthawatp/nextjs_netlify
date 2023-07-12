import Link from "next/link";

import { RiLineLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[25px]">
      <Link href={"https://line.me/ti/p/6k6pAFd4mI"} className="hover:text-accent transition-all duration-300">
        <RiLineLine />
      </Link>
      <Link href={"https://www.facebook.com/natthawat.petphan"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://instagram.com/aunz_nxtp?igshid=ZGUzMzM3NWJiOQ=="} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
