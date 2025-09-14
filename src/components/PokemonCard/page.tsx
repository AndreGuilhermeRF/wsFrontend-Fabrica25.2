"use client";
import * as React from 'react';
import Link from "next/link";


export default function PokemonCard({ name, image, id, isGrid = false }) {
  return (
    <Link href={`/details/${id}`}>
      <div className="pokemon-card">
        <img
          src={image}
          alt={name}   
        />
        <div className="pokemon-name">
          <div className="pokemon-type"><p className="font-bold capitalize">{name}</p></div>
          <div className="pokemon-id">#{id}</div>
        </div>
      </div>
    </Link>
  );
}
