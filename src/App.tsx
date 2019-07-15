import React from "react";
import "./App.css";

import PokemonSearch from "./components/PokemonSearch";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to first react typescript Search your pokemons</h1>
      <PokemonSearch name="Jkingz" numberOfPokemons={5} />
    </div>
  );
};

export default App;
