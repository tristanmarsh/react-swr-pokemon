import useSWR from "swr";

const BASE_URL = "https://pokeapi.co/api/v2";

export const usePokeAPI = (path, name) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? `${BASE_URL}${path}/${name}` : `${BASE_URL}${path}`;
  const { data, error, isValidating } = useSWR(url);

  return {
    data,
    error,
    isValidating
  };
};
