import { useEffect, useState } from "react";
import { UserProps } from "../../types/userType";

export const useSearch = (
  userName: string
): [UserProps | null, boolean, string | null] => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userName) {
        setUser(null);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://api.github.com/users/${userName}`);

        if (!res.ok) {
          if (res.status === 404) {
            setError("Usuário não encontrado");
          } else {
            throw new Error(`Failed to fetch user: ${res.status}`);
          }
        } else {
          const data = await res.json();

          setUser(data);
        }
      } catch (error) {
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userName]);

  return [user, loading, error];
};
