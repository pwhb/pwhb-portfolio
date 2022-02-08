import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import resume from "../constants/resume.json";
import { capitalize } from "../utils";

const Navbar = () => {
  return (
    <nav className="">
      <div className="relative flex items-center justify-between h-16 mb-2">
        <ProfileInfo />
        <NavLinks small={false} />
        <ToggleTheme />
      </div>

      <hr />
      <NavLinks small={true} />
    </nav>
  );
};

const ProfileInfo = () => {
  return (
    <div className="flex flex-row">
      <img src="images/code.svg" className="w-8 mr-4" />
      <div className="flex flex-col ">
        <p className="font-medium text-sm mb-1 md:text-base">
          {resume.basics.name}
        </p>

        <p className="font-medium text-xs mb-1 md:text-sm">
          {resume.basics.label}
        </p>
      </div>
    </div>
  );
};

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <img
        src={theme === "dark" ? "images/night.svg" : "images/day.svg"}
        className="w-7 hover:scale-110"
      />
    </button>
  );
};

const NavLinks = ({ small = false }) => {
  const router = useRouter();
  return (
    <div className={`${small ? "md:hidden my-5" : "hidden md:block"}`}>
      <div className="flex space-x-8 justify-center">
        <NavItem name="about" />
        <NavItem name="work" />
        <NavItem name="tech" />
        <NavItem name="projects" />
      </div>
    </div>
  );
};

const NavItem = ({ name }) => {
  const href = `/#${name}`;
  const title = capitalize(name);
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`hover:underline-offset-8 hover:underline hover:scale-125 ${
          router.asPath === href
            ? "font-bold scale-110 dark:text-white"
            : "text-gray-700 dark:text-gray-200"
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

export default Navbar;
