"use client";
import PokemonCard from "@/components/PokemonCard/page";
import axios from "axios";
import { useEffect, useState } from "react";
import "./globals.css";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPoke();
  }, []);
  const getPoke = async () => {
    const endpoints = [];
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res));
  };
  const filterPoke = (name) => {
    const filteredPokemon = [];
    if (name === "") {
      getPoke();
      return;
    }
    for (let i in pokemon) {
      if (pokemon[i].data.name.includes(name)) {
        filteredPokemon.push(pokemon[i]);
      }
    }
    setPokemon(filteredPokemon);
  };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header filterPoke={filterPoke} />
      <h1 className="page-title">Pokedex de todos os 151 Pokemon originais</h1>
      <div className="container">
        {pokemon.map((poke, key) =>
          poke.data && poke.data.sprites ? (
            <PokemonCard
              name={poke.data.name}
              image={poke.data.sprites.front_default}
              id={poke.data.id}
              key={key}
            />
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
}
