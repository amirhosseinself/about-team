const Logo = () => {
  return (
    <div className="ltr flex items-center gap-2 px-3 py-1 rounded-lg bg-[#ffffff] shadow-sm border border-[#e2e8f0]">
      {/* Icon section */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ff8a5b] via-[#ff5864] to-[#d94f70] shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v4m0 8v4m8-8h-4M8 12H4m11.31-5.31l2.12 2.12M6.57 17.43l-2.12 2.12M17.43 17.43l2.12 2.12M6.57 6.57L4.45 4.45"
          />
        </svg>
      </div>

      {/* Text section */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-extrabold text-[#3b2f2f] tracking-wide">
          Nudia
        </span>
        <span className="text-xs text-[#9f7e7e] tracking-tight">
          Creative team
        </span>
      </div>
    </div>
  );
};

export default Logo;
