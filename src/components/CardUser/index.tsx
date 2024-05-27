import { UserProps } from "../../types/userType";
import { Link } from "react-router-dom";

const CardUser = ({
  login,
  avatar_url,
  followers,
  following,
  name,
}: UserProps) => {
  return (
    <div data-testid="carduser" className="w-[100%] shadow-xl bg-white rounded-xl border-2 border-[#eee] flex flex-col items-center justify-between py-7 px-6 gap-4">
      <div className="w-[100%] flex items-center gap-4">
        <img className="size-20 rounded-full" src={avatar_url} alt={login} />
        <div className="flex flex-col">
            <h2 className="text-lg font-bold lg:text-xl">{login}</h2>
            <h3 className="text-sm">{name}</h3>
        </div>
      </div>     
      <div className="w-[100%] flex justify-evenly border-b-2">
        <div className="flex flex-col items-center">
          <p className="font-bold">{followers}</p>
          <p>Seguidores:</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{following}</p>
          <p>Seguindo:</p>
        </div>
      </div>
      <Link data-testid="seerepositories" to={`/repos/${login}`}  type="button" className="flex items-center justify-center h-10 w-fit rounded-xl px-6 font-semibold text-base bg-blue-700 text-white">Acessar</Link>
    </div>
  );
};

export default CardUser;
