"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface ISearchInput {
  className?: string;
}

const SearchInput: React.FC<ISearchInput> = ({ className }) => {
  const [value, setValue] = React.useState<string>("");
  const router = useRouter();

  const debounceValue = useDebounce({ orgValue: value, timeout: 100 });

  React.useEffect(() => {
    if (debounceValue.trim()) {
      router.push(`/search?query=${debounceValue}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <div className={`relative w-1/2 ${className}`}>
      <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
        <IoSearchOutline className="w-4 h-4 relative bottom-0.5" />
      </div>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="block w-full placeholder:text-xs text-xs shadow-sm bg-white py-2.5 outline-none rounded-full px-8 md:py-2.5 pr-12 ps-10 border-none dark:placeholder-gray-400 dark:text-white"
        placeholder="اینجا سرچ کنید..."
      />
    </div>
  );
};

export default SearchInput;
