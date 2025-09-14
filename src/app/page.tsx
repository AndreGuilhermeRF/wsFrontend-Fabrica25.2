"use client";
import PokemonCard from "@/components/PokemonCard/page";
import axios from "axios";
import { useEffect, useState } from "react";
import { resolve } from "path";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPoke();
  }, []);
  const getPoke = async () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res));
    };
    const filterPoke = (name) => {
      var filteredPokemon = [];
      if (name === "") {
        getPoke();
      }
      for(var i in pokemon){
        if(pokemon[i].data.name.includes(name)){
          filteredPokemon.push(pokemon[i]);
        }
    }
    
    setPokemon(filteredPokemon);
    };
return (
    <div>
      <Header filterPoke={filterPoke} />
      <div className="container">
        {pokemon.map((poke,key) => (
          <PokemonCard name={poke.data.name} image={poke.data.sprites.front_default} id={poke.data.id} key={key} />
        ))}
      </div>
      <Footer />
    </div>

);
}
