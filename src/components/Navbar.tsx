import Toggle from "./Toggle";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 px-4 pt-4 mt-2">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between pr-40 pl-28">
        {/* Left section - empty for now */}

        {/* Middle section - Search */}
        <div className="relative flex w-full max-w-md items-center bg-gray-50 shadow-md focus-within:ring-0 rounded-full pr-4 h-10">
          <Input
            type="search"
            placeholder="Search"
            className=" border-0  h-10 focus:ring-0 w-full  text-xl"
          />
          <Search className="left-4 h-6 w-6 text-gray-400 z-10" />
        </div>

        {/* Right section - Discord & Toggle */}
        <div className="flex w-48 items-center justify-end gap-6 ">
          <button className="rounded-full bg-indigo-700 p-3 hover:bg-[#4752C4] transition-colors">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
            </svg>
          </button>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
