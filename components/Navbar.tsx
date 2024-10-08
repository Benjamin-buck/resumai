import Button from "@/components/Button";
import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="sm:px-[100px] px-8 py-5  flex justify-between items-center">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-[30px]" />
      </Link>
      <div>
        <ul className="md:flex gap-8 hidden">
          {navLinks.map(({ href, label, id }) => (
            <Link
              href={href}
              key={id}
              className="hover:text-purple font-semibold font-heebo"
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="gap-3 sm:flex hidden">
        <Button label="Log in" href="/home" />
        <Button label="Sign Up" href="/home" />
      </div>
      <RiMenu5Fill className="sm:hidden block text-[30px] text-purple" />
    </div>
  );
};

export default Navbar;
