import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="mt-5 pb-4 text-lg leading-6 text-[#161515] font-bold">
      <h2 className="font-irsans-bold relative pr-4 before:content-[''] before:absolute before:right-0 before:top-1/2 before:translate-y-[-50%] before:w-[8px] before:h-[32px] before:rounded before:bg-[#ff2335]">
        {children}
      </h2>
    </div>
  );
};

export default Header;
