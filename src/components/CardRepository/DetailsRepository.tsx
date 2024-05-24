import { Link } from "react-router-dom";
import { RepositoryProps } from "../../types/repositoryType";

export const DetailsRepository = ({
  name,
  description,
  html_url,
}: RepositoryProps) => {
  return (
    <div className="w-[100%] shadow-xl bg-white rounded-xl border-2 border-[#eee] flex-col md:flex md:flex-row justify-between md:items-center py-7 px-6">
      <div className="flex flex-col mb-4">
        <h2 className="text-blue-700 font-bold text-lg">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <Link
        to={html_url}
        type="button"
        className="flex items-center justify-center h-10 w-fit rounded-xl px-6 font-semibold text-base bg-blue-700 text-white"
      >
        Ver
      </Link>
    </div>
  );
};
