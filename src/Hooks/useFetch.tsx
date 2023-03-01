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

  useEffect(() => {
    async function api() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.data);
    }
    api();
  }, [url]);

  return { data };
}
