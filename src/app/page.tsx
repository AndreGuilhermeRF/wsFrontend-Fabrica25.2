"use client";
import PokemonCard from "@/components/PokemonCard/page";
import axios from "axios";
import { useEffect, useState } from "react";
import "./globals.css";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

// Tipagem para a resposta da PokeAPI (resumida ao que você usa)
interface PokemonResponse {
  data: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
}

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonResponse[]>([]);

  useEffect(() => {
    getPoke();
  }, []);

  const getPoke = async () => {
    const endpoints: string[] = [];
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemon(res));
  };

  const filterPoke = (name: string) => {
    const filteredPokemon: PokemonResponse[] = [];
    if (name === "") {
      getPoke();
      return;
    }
    for (const poke of pokemon) {
      if (poke.data.name.includes(name.toLowerCase())) {
        filteredPokemon.push(poke);
      }
    }
    setPokemon(filteredPokemon);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header filterPoke={filterPoke} />
      <h1 className="page-title">Pokedex de todos os 151 Pokémon originais</h1>
      <div className="container">
        {pokemon.map((poke) =>
          poke.data && poke.data.sprites ? (
            <PokemonCard
              name={poke.data.name}
              image={poke.data.sprites.front_default}
              id={poke.data.id}
              key={poke.data.id}
            />
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
}
