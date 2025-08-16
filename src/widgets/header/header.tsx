import { NavLink } from "react-router";
import { NAV_ITEMS } from "@/lib/consts";

function Header() {
  return (
    <header className="flex w-fit items-center justify-between rounded-lg bg-white px-6 pt-4">
      <nav className="flex space-x-6 text-sm">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative overflow-y-hidden pb-4 after:absolute after:bottom-0 after:left-0 after:h-2 after:w-0 after:translate-y-1/2 after:rounded-full after:bg-primary ${isActive ? "text-primary after:w-full" : "text-gray-400"}`
            }
          >
            {item.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
