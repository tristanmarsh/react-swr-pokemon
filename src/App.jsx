import "./App.css";

import { Pokemon } from "Pokemon";
import React from "react";
import { usePokeAPI } from "usePokeAPI";

function App() {
  const { data: result, error } = usePokeAPI("/pokemon");

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (!result) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="app">
      <h1>Pokedex</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}

export default App;
