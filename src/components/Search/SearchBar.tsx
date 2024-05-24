import { useState, KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  fetchUser: (userName: string) => Promise<void>;
};

export const SearchBar = ({ fetchUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      fetchUser(userName);
    }
  };

  return (
    <div className="flex items-center bg-white w-[100%] rounded-xl h-10 px-4 shadow-md">
      <button aria-label="search" onClick={() => fetchUser(userName)}>
        <FaSearch className="fill-blue-500" />
      </button>
      <input
        className="w-[100%] ml-1 bg-transparent border-none h-[100%] text-xl focus:outline-none"
        type="text"
        placeholder="Digite o nome do usuário"
        name="username"
        id="username"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
