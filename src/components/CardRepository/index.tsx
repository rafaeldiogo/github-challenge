import { useEffect, useState } from "react";
import { RepositoryProps } from "../../types/repositoryType";
import { DetailsRepository } from "./DetailsRepository";
import { Link, useParams } from "react-router-dom";

export const CardRepository = () => {
  const { username } = useParams();
  const [repository, setRepository] = useState<RepositoryProps[] | [] | null>(null);

  useEffect(() => {
    const fetchRepository = async function (username: string) {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();

      setRepository(data);
    };

    if (username) {
      fetchRepository(username);
    }
  }, [username]);

  return (
    <>
       <Link
        to="/"
        type="button"
        className="m-4 flex items-center justify-center h-10 w-fit rounded-xl px-6 font-semibold text-base bg-blue-700 text-white"
      >
        Voltar
      </Link>
      <div className="flex flex-col items-center min-w-72 pt-[4vh] w-[50%] m-auto gap-2">
        {repository?.map((repository: RepositoryProps) => (
          <DetailsRepository key={repository.name} {...repository} />
        ))}
      </div>
    </>
  );
};

