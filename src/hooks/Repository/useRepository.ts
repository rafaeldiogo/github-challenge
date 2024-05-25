import { useEffect, useState } from "react";
import { RepositoryProps } from "../../types/repositoryType";

export const useRepository = (username: string) => {
  const [repository, setRepository] = useState<RepositoryProps[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRepository = async function (username: string) {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await res.json();

        const sortByDateOldestToNewest = data.sort(
          (a: RepositoryProps, b: RepositoryProps) => {
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );
          }
        );

        const sortByDateAndStarCount = sortByDateOldestToNewest.sort(
          (a: RepositoryProps, b: RepositoryProps) => {
            return b.stargazers_count - a.stargazers_count;
          }
        );

        setRepository(sortByDateAndStarCount);
      } catch (error) {
        setError("Sistema instável, tente novamente em alguns instantes.");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepository(username);
    }
  }, [username]);

  return { repository, loading, error };
};
