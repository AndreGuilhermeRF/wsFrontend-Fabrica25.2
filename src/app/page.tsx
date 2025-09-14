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
    try {
      const endpoints: string[] = [];
      for (let i = 1; i < 152; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }

      // 🚀 async/await em vez de .then()
      const res = await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)));
      setPokemon(res);
    } catch (error) {
      console.error("Erro ao buscar os pokémons:", error);
    }
  };

  const filterPoke = (name: string) => {
    if (name === "") {
      getPoke();
      return;
    }

    const filteredPokemon: PokemonResponse[] = pokemon.filter((poke) =>
      poke.data.name.includes(name.toLowerCase())
    );

    setPokemon(filteredPokemon);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header filterPoke={filterPoke} value="" />
      <h1 className="page-title">Pokedex de todos os 151 Pokémon originais</h1>
      <div className="container">
        {pokemon.map((poke) =>
          poke.data && poke.data.sprites ? (
            <PokemonCard
              key={poke.data.id}
              name={poke.data.name}
              image={poke.data.sprites.front_default}
              id={poke.data.id}
            />
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
}
