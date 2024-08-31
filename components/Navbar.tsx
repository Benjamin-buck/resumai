import Button from "@/components/Button";
import { navLinks } from "@/data";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="sm:px-[100px] px-8 py-5  flex justify-between items-center">
      <h1 className="text-3xl font-bold font-heebo">
        RESUM<span className="text-purple">AI</span>
      </h1>
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
        <Button label="Log in" href="/dashboard" />
        <Button label="Sign Up" href="/signup" />
      </div>
      <RiMenu5Fill className="sm:hidden block text-[30px] text-purple" />
    </div>
  );
};

export default Navbar;
