import React from "react";
import { usePokeAPI } from "usePokeAPI";

export const Pokemon = ({ pokemon }) => {
  const { name } = pokemon;
  const { data, error, isValidating } = usePokeAPI("/pokemon", name);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className={`card ${isValidating ? "isValidating" : ""}`}>
      <span className="card-id">#{data.id}</span>
      <img src={data.sprites.front_default} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <span className="card-details">
        {data.types.map((poke) => poke.type.name).join(", ")}
      </span>
    </div>
  );
};
