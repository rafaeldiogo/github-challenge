import { useState } from "react";
import { SearchBar } from "./SearchBar";
import CardUser from "../CardUser";
import { useSearch } from "../../hooks/Search";

export const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, loading, error] = useSearch(userName);

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center min-w-72 pt-[20vh] w-[25%] m-auto gap-2">
        <SearchBar fetchUser={setUserName} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userName && user && <CardUser {...user} />}
      </div>
    </div>
  );
};
