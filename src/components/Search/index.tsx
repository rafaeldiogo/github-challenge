import { useState } from "react";
import { UserProps } from "../../types/userType";
import { SearchBar } from "./SearchBar";
import CardUser from "../CardUser";

export const Search = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const fetchUser = async function (userName: string) {
      setUser(null);
  
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
  
      const { avatar_url, login, followers, following, name } = data;
  
      const userData: UserProps = {
        avatar_url,
        login,
        followers,
        following,
        name
      };
  
      setUser(userData);
    };

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center min-w-72 pt-[20vh] w-[25%] m-auto gap-2">
        <SearchBar fetchUser={fetchUser} />
         {user && <CardUser {...user}/>}
      </div>
    </div>
  )
}
