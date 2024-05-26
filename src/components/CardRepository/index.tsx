import { RepositoryProps } from "../../types/repositoryType";
import { DetailsRepository } from "./DetailsRepository";
import { Link, useParams } from "react-router-dom";
import { useRepository } from "../../hooks/Repository";

export const CardRepository = () => {
  const { username } = useParams();
  const { repository, error, loading } = useRepository(username ?? "");

  return (
    <>
      <Link
        to="/"
        type="button"
        className="m-4 flex items-center justify-center h-10 w-fit rounded-xl px-6 font-semibold text-base bg-blue-700 text-white"
      >
        Voltar
      </Link>
      <div className="flex flex-col items-center min-w-72 w-[50%] m-auto gap-2 mb-4">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!error && (
          <>
            {repository?.map((repository: RepositoryProps) => (
              <DetailsRepository key={repository.name} {...repository} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
