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
          <p className="font-bold capitalize">{name}</p>
          <p className="text-gray-500">#{id}</p>
        </div>
      </div>
    </Link>
  );
}
