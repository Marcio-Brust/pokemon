import { useEffect, useState } from "react";

interface IPokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  images: {
    small: string;
    large: string;
  };
  rarity: string;
}

export function useFetch(url: string) {
  const [data, setData] = useState<IPokemon[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function api() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    api();
  }, [url]);

  return { data, error, loading };
}
